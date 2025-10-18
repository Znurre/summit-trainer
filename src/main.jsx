import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as Tooltip from '@radix-ui/react-tooltip';

// ===================== CONFIG =====================
const classesConfig = [
  {
    name: 'Brawler',
    trees: [
      {
        name: 'Brawling',
        skills: [
          {
            name: 'Uppercut',
            description: 'Delivers a sharp upward strike that interrupts your opponent’s momentum, dealing extra damage while leaving them off-balance.',
            icon: 'src/assets/spell18.png',
            fields: [
              { name: "Cooldown", value: l => (4 - l) + " second(s)", color: 'silver' },
              { name: "Global cooldown", value: l => "1 second", color: 'silver' },
              { name: "Cancels the opponent's current action and puts them into global cooldown.", color: '#00aaff' },
              { name: "Damage to target", value: l => l * 2, color: '#00aaff' },
            ]
          },
          {
              name: 'Kick',
              description: 'Sweeps the target off their feet, forcing them to the ground and leaving them temporarily unable to act.',
              icon: 'src/assets/summit.png',
              fields: [
                { name: 'Duration', value: l => l * 2 + " seconds", color: 'silver' },
                { name: 'Cooldown', value: l => "20 seconds", color: 'silver' },
                { name: 'Global cooldown', value: l => "1 second", color: 'silver' },
                { name: 'Target becomes incapacitated for the duration', color: '#00aaff' },
              ]
          },
          {
              name: 'Rapid Jabs',
              description: 'A flurry of quick strikes in succession.',
              icon: 'src/assets/spell2.png',
              fields: [
                { name: 'Cooldown', value: l => "5 seconds", color: 'silver' },
                { name: 'Global cooldown', value: l => "2 second", color: 'silver' },
                { name: "Number of hits", value: l => 3 * l, color: '#00aaff' },
                { name: "Damage to target per hit", value: l => 2, color: '#00aaff' },
                { name: "Caster is inactionable for the duration", color: '#ff557f' },
                { name: "Cancels if the opponent moves out of range", color: '#ff557f' },
              ]
          },
          {
              name: 'Suplex',
              description: 'Grabs the opponent and slams them to the ground, closing the distance instantly and leaving them briefly incapacitated.',
              icon: 'src/assets/summit.png',
              fields: [
                { name: 'Cooldown', value: l => "20 seconds", color: 'silver' },
                { name: 'Global cooldown', value: l => "2 second", color: 'silver' },
                { name: "Range", value: l => 15, color: 'silver' },
                { name: "Damage to target", value: l => 2 * l, color: '#00aaff' },
                { name: "Target becomes incapacitated for", value: l => l + " second(s)", color: '#00aaff' },
              ]
          },
          {
              name: 'Frenzy',
              description: 'Builds momentum with each attack, increasing your damage for a short period or until a set number of strikes land.',
              icon: 'src/assets/spell4.png',
              fields: [
                { name: 'Cooldown', value: l => "20 seconds", color: 'silver' },
                { name: 'Global cooldown', value: l => "2 seconds", color: 'silver' },
                { name: 'Duration', value: l => (3 + l * 2) + " seconds", color: 'silver' },
                { name: "Damage accumulation per auto attack", value: l => 1, color: '#00aaff' },
                { name: "Number of attacks", value: l => 3 + l * 2, color: '#00aaff' },
              ]
          },
          {
              name: 'Gut Punch',
              description: 'A devastating blow to the midsection, delivering high damage.',
              icon: 'src/assets/summit.png',
              fields: [
                { name: 'Cooldown', value: l => "5 seconds", color: 'silver' },
                { name: 'Global cooldown', value: l => "2 seconds", color: 'silver' },
                { name: "Damage", value: l => 4 + (l * 3), color: '#00aaff' },
              ]
          },
        ]
      },
      {
        name: 'Instinct',
        skills: [
          {
              name: 'Dodge',
              description: 'Leaps backward to evade close-range attacks, quickly putting distance between you and your opponent.',
              icon: 'src/assets/spell9.png',
              fields: [
                { name: 'Cooldown', value: l => (13 - l * 3) + " seconds", color: 'silver' },
                { name: 'Global cooldown', value: l => "2 seconds", color: 'silver' },
                { name: "Distance", value: l => l + " meter(s)", color: '#00aaff' },
              ]
          },
          {
              name: 'Feint',
              description: 'Assumes a stance of anticipating an incoming attack, dodging it in the last moment. If the attack is a melee attack, the feint additionally causes the opponent to trip.',
              icon: 'src/assets/summit.png',
              fields: [
                { name: 'Cooldown', value: l => (12 - l * 2) + " seconds", color: 'silver' },
                { name: 'Global cooldown', value: l => "1 seconds", color: 'silver' },
                { name: 'Duration', value: l => "2 seconds", color: 'silver' },
                { name: "Dodges one attack completely, including any effects associated with it.", color: '#55ff7f' },
                { name: "Active until either the duration has elapsed, or one attack has been dodged.", color: '#55ff7f' },
                { name: "Caster inactionable for the whole duration.", color: '#ff557f' },
                { name: "Melee attacker becomes incapacitated for an additional duration of", value: l => l + " second(s)", color: '#00aaff' },
              ]
          },
          {
              name: 'Sprint',
              description: 'Bursts forward with increased speed, allowing you to close gaps or escape threats for a short time.',
              icon: 'src/assets/summit.png',
              fields: [
                { name: 'Cooldown', value: l => "10 seconds", color: 'silver' },
                { name: 'Global cooldown', value: l => "1 seconds", color: 'silver' },
                { name: 'Duration', value: l => l + " seconds(s)", color: 'silver' },
                { name: "Speed boost", value: l => "10%", color: '#55ff7f' },
              ]
          },
          {
              name: 'Medidate',
              description: 'Settles into a controlled rest to restore health. You are immobile and vulnerable while focusing on recovery.',
              icon: 'src/assets/spell6.png',
              fields: [
                { name: 'Cooldown', value: l => "10 seconds", color: 'silver' },
                { name: 'Global cooldown', value: l => "2 seconds", color: 'silver' },
                { name: 'Cast time', value: l => "3 seconds", color: 'silver' },
                { name: "Health restored", value: l => l  * 10, color: '#55ff7f' },
                { name: "Caster inactionable for the whole duration, or until attacked.", color: '#ff557f' },
              ]
          },
          {
              name: 'Awareness',
              description: 'Sharpens all senses in order to become extremely aware of your surroundings, sensing the presence of enemies in the surrounding area, even if they are behind walls.',
              icon: 'src/assets/summit.png',
              fields: [
                { name: 'Cooldown', value: l => "10 seconds", color: 'silver' },
                { name: 'Global cooldown', value: l => "2 seconds", color: 'silver' },
                { name: "Distance", value: l => 5 + l * 5 + " meters", color: 'silver' },
                { name: "Duration", value: l => "3 seconds", color: 'silver' },
                { name: "Caster inactionable for the whole duration, or until attacked.", color: '#ff557f' },
              ]
          },
          {
              name: 'Ground Impact',
              description: 'Delivers a powerful strike to the ground, stunning all nearby opponents in the impact zone.',
              icon: 'src/assets/summit.png',
              fields: [
                { name: 'Cooldown', value: l => "7 seconds", color: 'silver' },
                { name: 'Global cooldown', value: l => "2 seconds", color: 'silver' },
                { name: 'Duration', value: l => "2 seconds", color: 'silver' },
                { name: "Area of effect", value: l => l * 2 + " meters", color: '#00aaff' },
                { name: "All opponents in the area become incapacitated for the entire duration", color: '#00aaff' },
              ]
          },
        ]
      },
      {
        name: 'Instinct',
        skills: [
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
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            disabled={locked}
            className={`p-4 m-2 border rounded ${level < 1 || locked ? 'opacity-30' : 'opacity-100'}`}
            onClick={() => onChange(level + 1)}
          >
            <img src={skill.icon} width='32' height='32' /> {level}
          </button>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-gray-800 text-white p-2 rounded shadow-lg z-50"
            side="top"
            align="center"
          >
            <div className="font-bold">{skill.name}</div>
            <div>{skill.description}</div>
            {skill.fields.map(f => (
              <div key={f.name} style={{ color: f.color }}>
                  {f.name}{f.value ? `: ${f.value(level)}` : ''}
              </div>
            ))}
            <Tooltip.Arrow className="fill-gray-800" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
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
