import React, { useState, useEffect } from 'react';
import { Swords, Shield, Zap, Flame, Droplet, Wind, Brain, Heart, Eye } from 'lucide-react';

// ===================== CONFIGURATION =====================
const TOTAL_POINTS = 24;
const MAX_TREE_POINTS = 6;
const MAX_SKILL_LEVEL = 3;

// Icon mapping for skills without custom assets
const FALLBACK_ICONS = {
    'Psychic Lance': Brain,
    'Drain': Heart,
    'Razor Grid': Zap,
    'Contaminate': Droplet,
    'Taint': Shield,
    'Total Destruction': Flame,
    'Healing Touch': Heart,
    'Absorb': Shield,
    'Sacrifice': Heart,
    'Resurrect': Heart,
    'Change Class': Wind,
    'Dispell': Wind,
    'Hold': Brain,
    'Levitate': Wind,
    'Clone': Eye,
    'Teleport': Wind,
    'Dominate': Brain,
    'Extract': Eye
};

const CONFIG = {
    awakened: {
        name: 'Awakened',
        trees: {
            destruction: {
                name: 'Destruction',
                skills: {
                    psychicLance: {
                        name: 'Psychic Lance',
                        desc: 'Concentrated psychic energy pierces a single target.',
                        icon: 'psychic_lance.png',
                        stats: [
                            { name: 'Cooldown', val: l => '5 seconds', color: '#9ca3af' },
                            { name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
                            { name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
                            { name: 'Range', val: l => '15 meters', color: '#9ca3af' },
                            { name: 'Damage', val: l => 6 + l * 2, color: '#00aaff' }
                        ]
                    },
                    drain: {
                        name: 'Drain',
                        desc: 'Draws health from the target and adds it to yours.',
                        icon: 'drain.png',
                        stats: [
                            { name: 'Cooldown', val: l => '15 seconds', color: '#9ca3af' },
                            { name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
                            { name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
                            { name: 'Range', val: l => '15 meters', color: '#9ca3af' },
                            { name: 'Damage to target', val: l => 2 + l * 4, color: '#00aaff' },
                            { name: 'Caster receives all damage dealt as health', val: l => '', color: '#55ff7f' }
                        ]
                    },
                    razorGrid: {
                        name: 'Razor Grid',
                        desc: 'Deploys a web of cutting energy around you. Anyone who moves through the area takes continuous damage.',
                        icon: 'razor_grid.png',
                        stats: [
                            { name: 'Cooldown', val: l => '10 seconds', color: '#9ca3af' },
                            { name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
                            { name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
                            { name: 'Area of effect', val: l => l * 2, color: '#9ca3af' },
                            { name: 'Damage', val: l => 1, color: '#00aaff' }
                        ]
                    },
                    contaminate: {
                        name: 'Contaminate',
                        desc: "Turns the target's life energy against them, inflicting direct damage equal to a percentage of their current health.",
                        icon: 'contaminate.png',
                        stats: [
                            { name: 'Cooldown', val: l => '5 seconds', color: '#9ca3af' },
                            { name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
                            { name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
                            { name: 'Range', val: l => '15 meters', color: '#9ca3af' },
                            { name: 'Damage', val: l => (5 + l * 5) + "% of target's health", color: '#00aaff' }
                        ]
                    },
                    taint: {
                        name: 'Taint',
                        desc: "Turn's the opponent's own strikes against themselves for a brief period of time.",
                        icon: 'taint.png',
                        stats: [
                            { name: 'Cooldown', val: l => '10 seconds', color: '#9ca3af' },
                            { name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
                            { name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
                            { name: 'Range', val: l => '15 meters', color: '#9ca3af' },
                            { name: 'Duration', val: l => '3 seconds', color: '#9ca3af' },
                            { name: 'Damage reflected', val: l => l * 10 + '%', color: '#00aaff' }
                        ]
                    },
                    totalDestruction: {
                        name: 'Total Destruction',
                        desc: 'Rises slowly into the air, channeling immense energy before releasing a devastating blast.',
                        icon: 'total_destruction.png',
                        stats: [
                            { name: 'Cooldown', val: l => '30 seconds', color: '#9ca3af' },
                            { name: 'Global cooldown', val: l => '5 seconds', color: '#9ca3af' },
                            { name: 'Cast time', val: l => '5 seconds', color: '#9ca3af' },
                            { name: 'Duration', val: l => '3 seconds', color: '#9ca3af' },
                            { name: 'Area of effect', val: l => (5 + l * 5) + ' meters', color: '#9ca3af' },
                            { name: 'Damage', val: l => 100, color: '#00aaff' },
                            { name: 'Caster is immune to debuffs', val: l => '', color: '#55ff7f' },
                            { name: 'Damage distributed amongst allies', val: l => '', color: '#55ff7f' }
                        ]
                    }
                }
            },
            restoration: {
                name: 'Restoration',
                skills: {
                    healingTouch: {
                        name: 'Healing Touch',
                        desc: 'Transfers restorative energy to the target, or to yourself if no target is selected.',
                        icon: 'healing_touch.png',
                        stats: [
                            { name: 'Cooldown', val: l => '5 seconds', color: '#9ca3af' },
                            { name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
                            { name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
                            { name: 'Range', val: l => '15 meters', color: '#9ca3af' },
                            { name: 'Health restored', val: l => l * 10, color: '#55ff7f' }
                        ]
                    },
                    absorb: {
                        name: 'Absorb',
                        desc: 'Adopts a defensive stance that converts all incoming damage into health.',
                        icon: 'absorb.png',
                        stats: [
                            { name: 'Cooldown', val: l => '20 seconds', color: '#9ca3af' },
                            { name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
                            { name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
                            { name: 'Duration', val: l => '5 seconds', color: '#9ca3af' },
                            { name: 'Attacks absorbed', val: l => l, color: '#55ff7f' },
                            { name: 'Cannot attack for duration', val: l => '', color: '#ff557f' }
                        ]
                    },
                    sacrifice: {
                        name: 'Sacrifice',
                        desc: 'Sacrifices a portion of your own health to restore the health of the target.',
                        icon: 'sacrifice.png',
                        stats: [
                            { name: 'Cooldown', val: l => '10 seconds', color: '#9ca3af' },
                            { name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
                            { name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
                            { name: 'Range', val: l => '15 meters', color: '#9ca3af' },
                            { name: 'Caster loses health', val: l => 10 + l * 10, color: '#ff557f' },
                            { name: 'Target receives health', val: l => 10 + l * 10, color: '#55ff7f' }
                        ]
                    },
                    resurrect: {
                        name: 'Resurrect',
                        desc: 'Restores a fallen ally to life.',
                        icon: 'resurrect.png',
                        stats: [
                            { name: 'Cooldown', val: l => '30 seconds', color: '#9ca3af' },
                            { name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
                            { name: 'Cast time', val: l => '3 seconds', color: '#9ca3af' },
                            { name: 'Target is resurrected', val: l => '', color: '#55ff7f' },
                            { name: 'Health restored', val: l => (l * 20) - 10, color: '#55ff7f' }
                        ]
                    },
                    changeClass: {
                        name: 'Change Class',
                        desc: 'Temporarily forces a random class change onto the target.',
                        icon: 'change_class.png',
                        stats: [
                            { name: 'Cooldown', val: l => '30 seconds', color: '#9ca3af' },
                            { name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
                            { name: 'Cast time', val: l => (4 - l) + ' second(s)', color: '#9ca3af' },
                            { name: 'Range', val: l => (l * 5) + ' meters', color: '#9ca3af' },
                            { name: 'Duration', val: l => (l * 10) + ' seconds', color: '#9ca3af' },
                            { name: 'Random class for duration', val: l => '', color: '#00aaff' }
                        ]
                    },
                    dispell: {
                        name: 'Dispell',
                        desc: 'Removes all active effects from the target.',
                        icon: 'dispell.png',
                        stats: [
                            { name: 'Cooldown', val: l => (12 - l * 2) + ' seconds', color: '#9ca3af' },
                            { name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
                            { name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
                            { name: 'Range', val: l => (l * 5) + ' meters', color: '#9ca3af' },
                            { name: 'Removes all effects', val: l => '', color: '#00aaff' }
                        ]
                    }
                }
            },
            mindControl: {
                name: 'Mind Control',
                skills: {
                    hold: {
                        name: 'Hold',
                        desc: 'Uses strong mind control to make the opponent unable to move or perform any action.',
                        icon: 'hold.png',
                        stats: [
                            { name: 'Cooldown', val: l => '30 seconds', color: '#9ca3af' },
                            { name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
                            { name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
                            { name: 'Range', val: l => (l * 5) + ' meters', color: '#9ca3af' },
                            { name: 'Duration', val: l => (l * 2) + ' seconds', color: '#9ca3af' },
                            { name: 'Target becomes inactionable', val: l => '', color: '#00aaff' },
                            { name: 'Caster becomes inactionable', val: l => '', color: '#ff557f' },
                            { name: 'Cancels on any action', val: l => '', color: '#ff557f' }
                        ]
                    },
                    levitate: {
                        name: 'Levitate',
                        desc: 'Lifts the target off the ground, making them immune to melee attacks.',
                        icon: 'levitate.png',
                        stats: [
                            { name: 'Cooldown', val: l => '20 seconds', color: '#9ca3af' },
                            { name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
                            { name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
                            { name: 'Range', val: l => (l * 5) + ' meters', color: '#9ca3af' },
                            { name: 'Duration', val: l => (2 + l) + ' seconds', color: '#00aaff' },
                            { name: 'Immune to melee attacks', val: l => '', color: '#00aaff' }
                        ]
                    },
                    clone: {
                        name: 'Clone',
                        desc: 'Creates a mirrored duplicate that mimics every action.',
                        icon: 'clone.png',
                        stats: [
                            { name: 'Cooldown', val: l => '30 seconds', color: '#9ca3af' },
                            { name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
                            { name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
                            { name: 'Range', val: l => (l * 5) + ' meters', color: '#9ca3af' },
                            { name: 'Duration', val: l => (2 * l) + ' seconds', color: '#9ca3af' },
                            { name: 'Clone mimics all actions', val: l => '', color: '#00aaff' },
                            { name: 'Health and damage shared', val: l => '', color: '#00aaff' }
                        ]
                    },
                    teleport: {
                        name: 'Teleport',
                        desc: 'Instantly shifts position in the direction of movement.',
                        icon: 'teleport.png',
                        stats: [
                            { name: 'Cooldown', val: l => '5 seconds', color: '#9ca3af' },
                            { name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
                            { name: 'Distance', val: l => (l * 2) + ' meters', color: '#9ca3af' },
                            { name: 'Teleport in movement direction', val: l => '', color: '#55ff7f' },
                            { name: 'Opponent loses target', val: l => '', color: '#55ff7f' }
                        ]
                    },
                    dominate: {
                        name: 'Dominate',
                        desc: 'Links your mind with the target, splitting all incoming damage.',
                        icon: 'dominate.png',
                        stats: [
                            { name: 'Cooldown', val: l => '30 seconds', color: '#9ca3af' },
                            { name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
                            { name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
                            { name: 'Range', val: l => '15 meters', color: '#9ca3af' },
                            { name: 'Duration', val: l => (l * 2) + ' seconds', color: '#9ca3af' },
                            { name: '50% damage reflected to target', val: l => '', color: '#55ff7f' },
                            { name: '50% damage reflected to caster', val: l => '', color: '#ff557f' }
                        ]
                    },
                    extract: {
                        name: 'Extract',
                        desc: 'Forces the target to drop their active class power-up.',
                        icon: 'extract.png',
                        stats: [
                            { name: 'Cooldown', val: l => '30 seconds', color: '#9ca3af' },
                            { name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
                            { name: 'Cast time', val: l => (6 - l) + ' seconds', color: '#9ca3af' },
                            { name: 'Range', val: l => (l * 5) + ' meters', color: '#9ca3af' },
                            { name: 'Power-up extracted', val: l => '', color: '#00aaff' }
                        ]
                    }
                }
            }
        }
    }
};

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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6">
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                                <div className="grid grid-cols-2 gap-4">
                                    {Object.entries(tree.skills).map(([skillKey, skill], idx) => {
                                        const Icon = FALLBACK_ICONS[skill.name] || Brain;
                                        const level = classState.skills[skillKey] || 0;
                                        const unlocked = idx < treePoints;

                                        return (
                                            <div key={skillKey} className="flex flex-col items-center gap-2">
                                                {/* Skill Icon */}
                                                <div
                                                    className={`relative group ${unlocked ? 'cursor-pointer' : ''}`}
                                                    onMouseEnter={e =>
                                                        unlocked &&
                                                        setTooltip({
                                                            skill,
                                                            level: Math.max(1, level),
                                                            x: e.clientX,
                                                            y: e.clientY
                                                        })
                                                    }
                                                    onMouseMove={e =>
                                                        unlocked &&
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
                            {React.createElement(FALLBACK_ICONS[tooltip.skill.name] || Brain, { size: 24 })}
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
