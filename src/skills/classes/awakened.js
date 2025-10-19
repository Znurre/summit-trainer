/* eslint-disable no-unused-vars */
export default {
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

