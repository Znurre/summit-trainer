import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';
import { FALLBACK_ICONS, TOTAL_POINTS, MAX_TREE_POINTS, MAX_SKILL_LEVEL, CONFIG } from './skills';
// ===================== HELPERS =====================
const encode = state => btoa(JSON.stringify(state));
const decode = str => { try { return JSON.parse(atob(str)); } catch { return {}; } };

// ===================== COMPONENT =====================
export default function SkillTrainer() {
    const [currentClass, setCurrentClass] = useState('awakened');
    const [state, setState] = useState({});
    const [tooltip, setTooltip] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const config = params.get('config');
        if (config) setState(decode(config));
    }, []);

    useEffect(() => {
        if (Object.keys(state).length > 0) {
            const url = new URL(window.location);
            url.searchParams.set('config', encode(state));
            window.history.replaceState({}, '', url);
        }
    }, [state]);

    const getClassState = () => {
        const defaultState = { trees: {}, skills: {} };
        return state[currentClass] || defaultState;
    };

    const getTotalPoints = () => {
        const cs = getClassState();
        const treePoints = Object.values(cs.trees || {}).reduce((a, b) => a + b, 0);
        const skillPoints = Object.values(cs.skills || {}).reduce((a, b) => a + b, 0);
        return treePoints + skillPoints;
    };

    const updateTree = (treeKey, delta) => {
        const cs = getClassState();
        const current = cs.trees[treeKey] || 0;
        const next = Math.max(0, Math.min(MAX_TREE_POINTS, current + delta));

        if (delta > 0 && getTotalPoints() >= TOTAL_POINTS) return;

        setState(prev => ({
            ...prev,
            [currentClass]: {
                ...cs,
                trees: { ...cs.trees, [treeKey]: next }
            }
        }));
    };

    const updateSkill = (treeKey, skillKey, delta) => {
        const cs = getClassState();
        const treeLevel = cs.trees[treeKey] || 0;
        const tree = CONFIG[currentClass].trees[treeKey];
        const skillIndex = Object.keys(tree.skills).indexOf(skillKey);

        if (skillIndex >= treeLevel) return;

        const current = cs.skills[skillKey] || 0;
        const next = Math.max(0, Math.min(MAX_SKILL_LEVEL, current + delta));

        if (delta > 0 && getTotalPoints() >= TOTAL_POINTS) return;

        setState(prev => ({
            ...prev,
            [currentClass]: {
                ...cs,
                skills: { ...cs.skills, [skillKey]: next }
            }
        }));
    };

    const classState = getClassState();
    const pointsUsed = getTotalPoints();
    const pointsLeft = TOTAL_POINTS - pointsUsed;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6 pb-100">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                        Skill Trainer
                    </h1>
                    <p className="text-gray-400 text-sm">Design your perfect build</p>
                </div>

                {/* Class Selection */}
                <div className="flex gap-3 mb-8 justify-center">
                    {Object.entries(CONFIG).map(([key, cls]) => (
                        <button
                            key={key}
                            onClick={() => setCurrentClass(key)}
                            className={`px-8 py-3 rounded-xl font-semibold transition-all transform ${currentClass === key
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/50 scale-105'
                                : 'bg-gray-800/50 hover:bg-gray-700/50 hover:scale-102'
                                }`}
                        >
                            {cls.name}
                        </button>
                    ))}
                </div>

                {/* Points Display */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-4 bg-gray-800/50 backdrop-blur px-8 py-4 rounded-2xl border border-gray-700/50">
                        <span className="text-gray-400">Points Remaining:</span>
                        <span className={`text-3xl font-bold ${pointsLeft > 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {pointsLeft}
                        </span>
                        <span className="text-gray-500">/ {TOTAL_POINTS}</span>
                    </div>
                </div>

                {/* Skill Trees */}
                <div className="flex flex-col items-center gap-6">
                    {Object.entries(CONFIG[currentClass].trees).map(([treeKey, tree]) => {
                        const treePoints = classState.trees[treeKey] || 0;

                        return (
                            <div
                                key={treeKey}
                                className="bg-gray-800/40 backdrop-blur rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all"
                            >
                                {/* Tree Header */}
                                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700/50">
                                    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        {tree.name}
                                    </h2>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => updateTree(treeKey, -1)}
                                            disabled={treePoints === 0}
                                            className="w-8 h-8 rounded-lg bg-red-600/80 hover:bg-red-500 disabled:bg-gray-700 disabled:cursor-not-allowed transition-all flex items-center justify-center font-bold"
                                        >
                                            −
                                        </button>
                                        <span className="text-xl font-bold w-10 text-center text-purple-300">
                                            {treePoints}
                                        </span>
                                        <button
                                            onClick={() => updateTree(treeKey, 1)}
                                            disabled={pointsLeft === 0 || treePoints >= MAX_TREE_POINTS}
                                            className="w-8 h-8 rounded-lg bg-green-600/80 hover:bg-green-500 disabled:bg-gray-700 disabled:cursor-not-allowed transition-all flex items-center justify-center font-bold"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Skills Grid */}
                                <div className="flex flex-wrap gap-4">
                                    {Object.entries(tree.skills).map(([skillKey, skill], idx) => {
                                        const Icon = FALLBACK_ICONS[currentClass]?.[skill.name] ?? Brain;
                                        const level = classState.skills[skillKey] || 0;
                                        const unlocked = idx < treePoints;

                                        return (
                                            <div key={skillKey} className="flex flex-col items-center gap-2">
                                                {/* Skill Icon */}
                                                <div
                                                    className={`relative group ${unlocked ? 'cursor-pointer' : ''}`}
                                                    onMouseEnter={e =>
                                                        setTooltip({
                                                            skill,
                                                            level: Math.max(0, level),
                                                            x: e.clientX,
                                                            y: e.clientY
                                                        })
                                                    }
                                                    onMouseMove={e =>
                                                        setTooltip(t => (t ? { ...t, x: e.clientX, y: e.clientY } : null))
                                                    }
                                                    onMouseLeave={() => setTooltip(null)}
                                                >
                                                    <div
                                                        className={`w-20 h-20 rounded-xl flex items-center justify-center transition-all border-2 ${unlocked
                                                            ? level > 0
                                                                ? 'border-purple-500 bg-gradient-to-br from-purple-600/20 to-pink-600/20 shadow-lg shadow-purple-500/30'
                                                                : 'border-gray-600 bg-gray-700/30 hover:bg-gray-600/40'
                                                            : 'border-gray-800 bg-gray-900/30 opacity-30'
                                                            }`}
                                                    >
                                                        {skill.icon ? (
                                                            <img
                                                                src={`/assets/${skill.icon}`}
                                                                alt={skill.name}
                                                                className="w-9 h-9"
                                                            />
                                                        ) : (
                                                            <Icon
                                                                size={36}
                                                                className={unlocked ? 'text-purple-300' : 'text-gray-700'}
                                                            />
                                                        )}
                                                    </div>

                                                    {/* Level Badge */}
                                                    {level > 0 && (
                                                        <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                                                            {level}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Skill Controls */}
                                                {unlocked && (
                                                    <div className="flex gap-1">
                                                        <button
                                                            onClick={() => updateSkill(treeKey, skillKey, -1)}
                                                            disabled={level === 0}
                                                            className="w-7 h-7 rounded-lg bg-red-600/80 hover:bg-red-500 disabled:bg-gray-700 disabled:cursor-not-allowed transition-all text-sm font-bold"
                                                        >
                                                            −
                                                        </button>
                                                        <button
                                                            onClick={() => updateSkill(treeKey, skillKey, 1)}
                                                            disabled={level >= MAX_SKILL_LEVEL || pointsLeft === 0}
                                                            className="w-7 h-7 rounded-lg bg-green-600/80 hover:bg-green-500 disabled:bg-gray-700 disabled:cursor-not-allowed transition-all text-sm font-bold"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                )}

                                                {/* Skill Name */}
                                                <span className="text-xs text-center text-gray-400 leading-tight">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Tooltip */}
            {tooltip && (
                <div
                    className="fixed z-50 bg-gray-900/95 backdrop-blur border-2 border-purple-500/50 rounded-xl p-4 shadow-2xl shadow-purple-500/30 pointer-events-none max-w-sm"
                    style={{ left: tooltip.x + 20, top: tooltip.y - 80 }}
                >
                    <div className="flex items-start gap-3 mb-3 pb-3 border-b border-gray-700/50">
                        <div className="text-purple-400">
                            {tooltip.skill.icon && (
                                <img src={`/assets/${tooltip.skill.icon}`} alt={tooltip.skill.name} className="w-24" />
                            ) || (React.createElement(FALLBACK_ICONS[currentClass]?.[tooltip.skill.name] || Brain, { size: 24 }))}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-purple-300">{tooltip.skill.name}</h3>
                            <p className="text-gray-400 text-sm mt-1">{tooltip.skill.desc}</p>
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        {tooltip.skill.stats.map((stat, i) => {
                            const value = stat.val(tooltip.level);
                            return (
                                <div key={i} className="flex justify-between text-sm gap-4">
                                    <span className="text-gray-400">{stat.name}:</span>
                                    <span style={{ color: stat.color }} className="font-semibold text-right">
                                        {value || '✓'}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-700/50 text-xs text-gray-500 text-center">
                        Level {tooltip.level} / {MAX_SKILL_LEVEL}
                    </div>
                </div>
            )}
        </div>
    );
}
