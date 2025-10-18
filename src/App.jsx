import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tooltip from 'react-tooltip-lite';

// ===================== CONFIG =====================
const classesConfig = [
  {
    name: 'Brawler',
    trees: [
      {
        name: 'Brawling',
        skills: [
          { name: 'Uppercut', description: 'Cancels an opponent action', icon: 'assets/spell18.png', fields: [{ name: 'Cooldown', value: l => 3 - l, color: 'red' }] },
          { name: 'Kick', description: 'Kicks an opponent to the ground', icon: '🦵', fields: [{ name: 'Damage', value: l => 5 + l*2, color: 'orange' }] },
          { name: 'Rapid Jabs', description: 'Quick burst', icon: '🤜', fields: [{ name: 'Hits', value: l => 3 + l, color: 'yellow' }] },
        ]
      },
      {
        name: 'Instinct',
        skills: [
          { name: 'Dodge', description: 'Quick jump backward', icon: '↩️', fields: [{ name: 'Distance', value: l => 2 + l, color: 'green' }] },
          { name: 'Sprint', description: 'Speed boost', icon: '🏃', fields: [{ name: 'Speed %', value: l => 10 + l*5, color: 'blue' }] },
        ]
      }
    ]
  },
  { name: 'Operative', trees: [] },
  { name: 'Cutthroat', trees: [] },
  { name: 'Awakened', trees: [] }
];

// ===================== HELPERS =====================
const encodeState = (state) => btoa(JSON.stringify(state));
const decodeState = (str) => { try { return JSON.parse(atob(str)); } catch { return {}; } };

// ===================== COMPONENTS =====================
function Skill({ skill, level, onChange, locked }) {
  return (
    <Tooltip content={
      <div className='p-2'>
        <div className='font-bold'>{skill.name}</div>
        <div>{skill.description}</div>
        {skill.fields.map(f => <div key={f.name} style={{color: f.color}}>{f.name}: {f.value(level)}</div>)}
      </div>
    }>
      <button disabled={locked} className={`p-4 m-2 border rounded ${locked ? 'opacity-30' : 'opacity-100'}`} onClick={() => onChange(level + 1)}>
        <img src={skill.icon} with='32' height='32' /> {level}
      </button>
    </Tooltip>
  );
}

function Tree({ tree, treeLevel, skillLevels, onTreeChange, onSkillChange }) {
  return (
    <div className='mb-4'>
      <div className='font-bold'>{tree.name} (Points: {treeLevel}) <button onClick={() => onTreeChange(treeLevel+1)}>+</button> <button onClick={() => onTreeChange(Math.max(0, treeLevel-1))}>-</button></div>
      <div className='flex'>
        {tree.skills.map((s, idx) => {
          const locked = idx >= treeLevel;
          return <Skill key={idx} skill={s} level={skillLevels[idx]} locked={locked} onChange={(newLevel) => onSkillChange(idx, newLevel)} />
        })}
      </div>
    </div>
  );
}

function ClassEditor({ classConfig, state, onStateChange }) {
  const classState = state[classConfig.name] || { treePoints: Array(classConfig.trees.length).fill(0), skillPoints: classConfig.trees.map(t => Array(t.skills.length).fill(0)) };

  const totalPointsUsed = classState.treePoints.reduce((a,b)=>a+b,0) + classState.skillPoints.flat().reduce((a,b)=>a+b,0);
  const pointsLeft = 18 - totalPointsUsed;

  const updateTree = (treeIdx, newLevel) => {
    if (pointsLeft + classState.treePoints[treeIdx] < newLevel) return;
    const newTreePoints = [...classState.treePoints];
    newTreePoints[treeIdx] = newLevel;
    onStateChange({...state, [classConfig.name]: {...classState, treePoints: newTreePoints}});
  };

  const updateSkill = (treeIdx, skillIdx, newLevel) => {
    if (pointsLeft + classState.skillPoints[treeIdx][skillIdx] < newLevel) return;
    const newSkillPoints = classState.skillPoints.map((arr,i)=>i===treeIdx? [...arr]: [...arr]);
    newSkillPoints[treeIdx][skillIdx] = newLevel;
    onStateChange({...state, [classConfig.name]: {...classState, skillPoints: newSkillPoints}});
  };

  return (
    <div>
      <div className='mb-2 font-bold'>Points left: {pointsLeft}</div>
      {classConfig.trees.map((tree, idx) => (
        <Tree key={idx} tree={tree} treeLevel={classState.treePoints[idx]} skillLevels={classState.skillPoints[idx]} onTreeChange={(lvl)=>updateTree(idx,lvl)} onSkillChange={(sIdx,lvl)=>updateSkill(idx,sIdx,lvl)} />
      ))}
    </div>
  );
}

function App() {
  const [currentClass, setCurrentClass] = useState(classesConfig[0].name);
  const [state, setState] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('config')) return decodeState(params.get('config'));
    return {};
  });

  useEffect(() => {
    const encoded = encodeState(state);
    const url = new URL(window.location);
    url.searchParams.set('config', encoded);
    window.history.replaceState({}, '', url);
  }, [state]);

  return (
    <div className='p-4'>
      <div className='mb-4'>
        Select Class: 
        <select value={currentClass} onChange={(e)=>setCurrentClass(e.target.value)} className='ml-2 border p-1'>
          {classesConfig.map(c=><option key={c.name} value={c.name}>{c.name}</option>)}
        </select>
      </div>
      {classesConfig.filter(c=>c.name===currentClass).map(c=> <ClassEditor key={c.name} classConfig={c} state={state} onStateChange={setState} />)}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
