/* eslint-disable no-unused-vars */
export default {
    name: 'Arbiter',
    trees: {
        aegis: {
            name: 'Aegis',
            skills: {
                shieldSlam: {
                    name: 'Shield Slam',
                    desc: 'Bashes the enemy with a heavy shield, dealing damage and briefly stunning them.',
                    icon: undefined,
                    stats: [
                        { name: 'Cooldown', val: l => '6 seconds', color: '#9ca3af' },
                        { name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
                        { name: 'Cast time', val: l => '0.8 seconds', color: '#9ca3af' },
                        { name: 'Range', val: l => '3 meters', color: '#9ca3af' },
                        { name: 'Damage', val: l => 8 + l * 2, color: '#00aaff' },
                        { name: 'Stun duration', val: l => (0.8 + l * 0.2) + ' seconds', color: '#00aaff' }
                    ]
                },
                bulwark: {
                    name: 'Bulwark',
                    desc: 'Assumes a defensive stance that reduces incoming damage for a short time.',
                    icon: undefined,
                    stats: [
                        { name: 'Cooldown', val: l => '20 seconds', color: '#9ca3af' },
                        { name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
                        { name: 'Cast time', val: l => 'Instant', color: '#9ca3af' },
                        { name: 'Duration', val: l => (6 + l) + ' seconds', color: '#9ca3af' },
                        { name: 'Damage reduction', val: l => (15 + l * 3) + '%', color: '#55ff7f' }
                    ]
                },
                fortify: {
                    name: 'Fortify',
                    desc: 'Generates a personal shield that absorbs damage. Excess absorb returns as a small heal.',
                    icon: undefined,
                    stats: [
                        { name: 'Cooldown', val: l => '30 seconds', color: '#9ca3af' },
                        { name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
                        { name: 'Cast time', val: l => 'Instant', color: '#9ca3af' },
                        { name: 'Duration', val: l => (8 + Math.floor(l / 2)) + ' seconds', color: '#9ca3af' },
                        { name: 'Shield strength', val: l => 40 + l * 10, color: '#55ff7f' },
                        { name: 'Excess converts to heal', val: l => Math.max(5, 5 + l) + '%', color: '#55ff7f' }
                    ]
                },
                righteousBarrier: {
                    name: 'Righteous Barrier',
                    desc: 'Erects a barrier around allies in a small area, granting shields and minor cleansing.',
                    icon: undefined,
                    stats: [
                        { name: 'Cooldown', val: l => '25 seconds', color: '#9ca3af' },
                        { name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
                        { name: 'Cast time', val: l => '1.2 seconds', color: '#9ca3af' },
                        { name: 'Area of effect', val: l => (6 + l) + ' meters', color: '#9ca3af' },
                        { name: 'Duration', val: l => (5 + l) + ' seconds', color: '#9ca3af' },
                        { name: 'Shield per ally', val: l => 20 + l * 5, color: '#55ff7f' },
                        { name: 'Removes one debuff', val: l => '', color: '#00aaff' }
                    ]
                },
                taunt: {
                    name: 'Taunt',
                    desc: 'Provokes a single enemy, forcing them to target you and reducing their defenses briefly.',
                    icon: undefined,
                    stats: [
                        { name: 'Cooldown', val: l => '12 seconds', color: '#9ca3af' },
                        { name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
                        { name: 'Cast time', val: l => 'Instant', color: '#9ca3af' },
                        { name: 'Range', val: l => '8 meters', color: '#9ca3af' },
                        { name: 'Duration', val: l => (2 + Math.floor(l / 2)) + ' seconds', color: '#00aaff' },
                        { name: 'Defense reduction on target', val: l => (5 + l * 5) + '%', color: '#ff557f' }
                    ]
                },
                bastion: {
                    name: 'Bastion',
                    desc: 'Creates a protective dome around you that heavily reduces incoming damage and reflects a portion back to attackers.',
                    icon: undefined,
                    stats: [
                        { name: 'Cooldown', val: l => '60 seconds', color: '#9ca3af' },
                        { name: 'Global cooldown', val: l => '3 seconds', color: '#9ca3af' },
                        { name: 'Cast time', val: l => '2 seconds', color: '#9ca3af' },
                        { name: 'Duration', val: l => (4 + l) + ' seconds', color: '#9ca3af' },
                        { name: 'Damage reduction', val: l => (30 + l * 5) + '%', color: '#55ff7f' },
                        { name: 'Reflects damage', val: l => (10 + l * 5) + '%', color: '#00aaff' },
                        { name: 'Allies inside reduced damage taken', val: l => (10 + l * 5) + '%', color: '#55ff7f' }
                    ]
                }
            }
        },
        judgement: {
            name: 'Judgement',
            skills: {
                verdictStrike: {
                    name: 'Verdict Strike',
                    desc: 'Channels divine focus into a single decisive strike.',
                    icon: undefined,
                    stats: [
                        { name: 'Cooldown', val: l => '5 seconds', color: '#9ca3af' },
                        { name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
                        { name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
                        { name: 'Range', val: l => '12 meters', color: '#9ca3af' },
                        { name: 'Damage', val: l => 10 + l * 4, color: '#00aaff' }
                    ]
                },
                purge: {
                    name: 'Purge',
                    desc: 'Strips beneficial effects from a target and deals holy damage.',
                    icon: undefined,
                    stats: [
                        { name: 'Cooldown', val: l => '15 seconds', color: '#9ca3af' },
                        { name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
                        { name: 'Cast time', val: l => '1.2 seconds', color: '#9ca3af' },
                        { name: 'Range', val: l => '15 meters', color: '#9ca3af' },
                        { name: 'Damage', val: l => 5 + l * 3, color: '#00aaff' },
                        { name: 'Removes up to', val: l => (1 + Math.floor(l / 3)) + ' buffs', color: '#00aaff' }
                    ]
                },
                condemn: {
                    name: 'Condemn',
                    desc: 'Calls down a pillar of judgement that damages and weakens enemies within the area.',
                    icon: undefined,
                    stats: [
                        { name: 'Cooldown', val: l => '18 seconds', color: '#9ca3af' },
                        { name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
                        { name: 'Cast time', val: l => '2 seconds', color: '#9ca3af' },
                        { name: 'Area of effect', val: l => (5 + l) + ' meters', color: '#9ca3af' },
                        { name: 'Damage', val: l => 25 + l * 8, color: '#00aaff' },
                        { name: 'Enemy damage reduced', val: l => (5 + l * 2) + '%', color: '#ff557f' }
                    ]
                },
                chainJudgement: {
                    name: 'Chain Judgement',
                    desc: 'Sends a wave of judgement that chains between multiple enemies, dealing reduced damage each jump.',
                    icon: undefined,
                    stats: [
                        { name: 'Cooldown', val: l => '20 seconds', color: '#9ca3af' },
                        { name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
                        { name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
                        { name: 'Range', val: l => '18 meters', color: '#9ca3af' },
                        { name: 'Targets', val: l => (3 + Math.floor(l / 2)), color: '#9ca3af' },
                        { name: 'Damage per target', val: l => 6 + l * 3, color: '#00aaff' }
                    ]
                },
                unwaveringWill: {
                    name: 'Unwavering Will',
                    desc: 'Bolsters resolve, increasing critical chance and granting a burst of mana regeneration.',
                    icon: undefined,
                    stats: [
                        { name: 'Cooldown', val: l => '30 seconds', color: '#9ca3af' },
                        { name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
                        { name: 'Cast time', val: l => 'Instant', color: '#9ca3af' },
                        { name: 'Duration', val: l => (6 + l) + ' seconds', color: '#9ca3af' },
                        { name: 'Critical chance increased', val: l => (5 + l * 2) + '%', color: '#55ff7f' },
                        { name: 'Mana regen per second', val: l => 2 + Math.floor(l / 2), color: '#55ff7f' }
                    ]
                },
                execution: {
                    name: 'Execution',
                    desc: 'Channels a focused strike that deals massive damage; instant kill chance against low-health foes.',
                    icon: undefined,
                    stats: [
                        { name: 'Cooldown', val: l => '40 seconds', color: '#9ca3af' },
                        { name: 'Global cooldown', val: l => '3 seconds', color: '#9ca3af' },
                        { name: 'Channel time', val: l => '3 seconds', color: '#9ca3af' },
                        { name: 'Range', val: l => '10 meters', color: '#9ca3af' },
                        { name: 'Damage', val: l => 50 + l * 20, color: '#00aaff' },
                        { name: 'Instant kill threshold', val: l => (10 + l * 2) + '% health', color: '#00aaff' }
                    ]
                }
            }
        },
        dominion: {
            name: 'Dominion',
            skills: {
                banish: {
                    name: 'Banish',
                    desc: 'Forces a non-boss enemy out of the battlefield temporarily, removing them from combat.',
                    icon: undefined,
                    stats: [
                        { name: 'Cooldown', val: l => '25 seconds', color: '#9ca3af' },
                        { name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
                        { name: 'Cast time', val: l => '1.5 seconds', color: '#9ca3af' },
                        { name: 'Range', val: l => '15 meters', color: '#9ca3af' },
                        { name: 'Duration', val: l => (3 + l) + ' seconds', color: '#00aaff' },
                        { name: 'Cannot be targeted', val: l => '', color: '#00aaff' }
                    ]
                },
                seizeControl: {
                    name: 'Seize Control',
                    desc: 'Temporarily dominates an enemy, forcing them to fight for you.',
                    icon: undefined,
                    stats: [
                        { name: 'Cooldown', val: l => '30 seconds', color: '#9ca3af' },
                        { name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
                        { name: 'Cast time', val: l => '1.5 seconds', color: '#9ca3af' },
                        { name: 'Range', val: l => '12 meters', color: '#9ca3af' },
                        { name: 'Duration', val: l => (2 + l) + ' seconds', color: '#00aaff' },
                        { name: 'Enemy fights allies', val: l => '', color: '#00aaff' }
                    ]
                },
                runeOfOrder: {
                    name: 'Rune of Order',
                    desc: 'Places a rune that channels order: slows foes and buffs allies who stand within it.',
                    icon: undefined,
                    stats: [
                        { name: 'Cooldown', val: l => '20 seconds', color: '#9ca3af' },
                        { name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
                        { name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
                        { name: 'Area of effect', val: l => (5 + Math.floor(l / 2)) + ' meters', color: '#9ca3af' },
                        { name: 'Duration', val: l => (6 + l) + ' seconds', color: '#9ca3af' },
                        { name: 'Enemy slow', val: l => (10 + l * 5) + '%', color: '#ff557f' },
                        { name: 'Ally damage buff', val: l => (5 + l * 3) + '%', color: '#55ff7f' }
                    ]
                },
                temporalAnchor: {
                    name: 'Temporal Anchor',
                    desc: 'Anchors time around a zone, drastically reducing enemy action speed and cooldown recovery.',
                    icon: undefined,
                    stats: [
                        { name: 'Cooldown', val: l => '35 seconds', color: '#9ca3af' },
                        { name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
                        { name: 'Cast time', val: l => 'Instant', color: '#9ca3af' },
                        { name: 'Area of effect', val: l => (6 + l) + ' meters', color: '#9ca3af' },
                        { name: 'Duration', val: l => (3 + Math.floor(l / 2)) + ' seconds', color: '#9ca3af' },
                        { name: 'Enemy action speed', val: l => '-' + (30 + l * 5) + '%', color: '#ff557f' },
                        { name: 'Enemy cooldown rate', val: l => '-' + (20 + l * 5) + '%', color: '#ff557f' }
                    ]
                },
                chainbind: {
                    name: 'Chainbind',
                    desc: 'Launches spectral chains that root and damage enemies in a line.',
                    icon: undefined,
                    stats: [
                        { name: 'Cooldown', val: l => '12 seconds', color: '#9ca3af' },
                        { name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
                        { name: 'Cast time', val: l => '0.8 seconds', color: '#9ca3af' },
                        { name: 'Range', val: l => '14 meters', color: '#9ca3af' },
                        { name: 'Damage', val: l => 6 + l * 3, color: '#00aaff' },
                        { name: 'Root duration', val: l => (1 + Math.floor(l / 2)) + ' seconds', color: '#00aaff' }
                    ]
                },
                dominionAscend: {
                    name: 'Dominion Ascend',
                    desc: 'Ascends to a commanding presence, empowering allies and imposing heavy penalties on enemies.',
                    icon: undefined,
                    stats: [
                        { name: 'Cooldown', val: l => '90 seconds', color: '#9ca3af' },
                        { name: 'Global cooldown', val: l => '5 seconds', color: '#9ca3af' },
                        { name: 'Cast time', val: l => '3 seconds', color: '#9ca3af' },
                        { name: 'Duration', val: l => (6 + l) + ' seconds', color: '#9ca3af' },
                        { name: 'Ally damage increase', val: l => (10 + l * 5) + '%', color: '#55ff7f' },
                        { name: 'Ally damage reduction', val: l => (10 + l * 3) + '%', color: '#55ff7f' },
                        { name: 'Enemy damage dealt reduced', val: l => (15 + l * 5) + '%', color: '#ff557f' }
                    ]
                }
            }
        }
    }
}
