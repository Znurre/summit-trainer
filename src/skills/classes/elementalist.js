/* eslint-disable no-unused-vars */
export default {
	name: 'Voidwalker',
	trees: {
		shadow: {
			name: 'Shadow',
			skills: {
				voidBolt: {
					name: 'Void Bolt',
					desc: 'Hurls a projectile of pure darkness at the target.',
					icon: 'spell2.png',
					stats: [
						{ name: 'Cooldown', val: l => '4 seconds', color: '#9ca3af' },
						{ name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
						{ name: 'Cast time', val: l => '0.8 seconds', color: '#9ca3af' },
						{ name: 'Range', val: l => '20 meters', color: '#9ca3af' },
						{ name: 'Damage', val: l => 5 + l * 3, color: '#00aaff' }
					]
				},
				shadowStep: {
					name: 'Shadow Step',
					desc: 'Melts into shadows and reappears behind the target.',
					icon: 'spell3.png',
					stats: [
						{ name: 'Cooldown', val: l => '12 seconds', color: '#9ca3af' },
						{ name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
						{ name: 'Cast time', val: l => 'Instant', color: '#9ca3af' },
						{ name: 'Range', val: l => (10 + l * 2) + ' meters', color: '#9ca3af' },
						{ name: 'Appears behind target', val: l => '', color: '#55ff7f' },
						{ name: 'Next attack damage', val: l => '+' + (l * 15) + '%', color: '#55ff7f' }
					]
				},
				darkZone: {
					name: 'Dark Zone',
					desc: 'Creates an area of impenetrable darkness that blinds enemies within.',
					icon: 'spell4.png',
					stats: [
						{ name: 'Cooldown', val: l => '18 seconds', color: '#9ca3af' },
						{ name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
						{ name: 'Cast time', val: l => '1.5 seconds', color: '#9ca3af' },
						{ name: 'Area of effect', val: l => (6 + l * 2) + ' meters', color: '#9ca3af' },
						{ name: 'Duration', val: l => (4 + l) + ' seconds', color: '#9ca3af' },
						{ name: 'Enemies blinded', val: l => '', color: '#00aaff' },
						{ name: 'Caster gains stealth', val: l => '', color: '#55ff7f' }
					]
				},
				soulSiphon: {
					name: 'Soul Siphon',
					desc: 'Drains the essence of nearby enemies over time.',
					icon: 'spell5.png',
					stats: [
						{ name: 'Cooldown', val: l => '20 seconds', color: '#9ca3af' },
						{ name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
						{ name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
						{ name: 'Area of effect', val: l => '10 meters', color: '#9ca3af' },
						{ name: 'Duration', val: l => '6 seconds', color: '#9ca3af' },
						{ name: 'Damage per second', val: l => 2 + l, color: '#00aaff' },
						{ name: 'Slows movement by 30%', val: l => '', color: '#00aaff' }
					]
				},
				voidShield: {
					name: 'Void Shield',
					desc: 'Wraps yourself in void energy that absorbs damage.',
					icon: 'spell6.png',
					stats: [
						{ name: 'Cooldown', val: l => '25 seconds', color: '#9ca3af' },
						{ name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
						{ name: 'Cast time', val: l => 'Instant', color: '#9ca3af' },
						{ name: 'Duration', val: l => '8 seconds', color: '#9ca3af' },
						{ name: 'Shield strength', val: l => 30 + l * 15, color: '#55ff7f' },
						{ name: 'Damage reduction', val: l => (20 + l * 5) + '%', color: '#55ff7f' }
					]
				},
				voidRift: {
					name: 'Void Rift',
					desc: 'Tears open a rift in reality, pulling all nearby enemies toward its center.',
					icon: 'spell8.png',
					stats: [
						{ name: 'Cooldown', val: l => '35 seconds', color: '#9ca3af' },
						{ name: 'Global cooldown', val: l => '3 seconds', color: '#9ca3af' },
						{ name: 'Cast time', val: l => '2 seconds', color: '#9ca3af' },
						{ name: 'Area of effect', val: l => (8 + l * 3) + ' meters', color: '#9ca3af' },
						{ name: 'Duration', val: l => '4 seconds', color: '#9ca3af' },
						{ name: 'Pull strength', val: l => (l * 10) + '%', color: '#00aaff' },
						{ name: 'Damage at center', val: l => 50 + l * 10, color: '#00aaff' }
					]
				}
			}
		},
		corruption: {
			name: 'Corruption',
			skills: {
				plague: {
					name: 'Plague',
					desc: 'Infects the target with a spreading disease.',
					icon: 'spell9.png',
					stats: [
						{ name: 'Cooldown', val: l => '8 seconds', color: '#9ca3af' },
						{ name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
						{ name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
						{ name: 'Range', val: l => '15 meters', color: '#9ca3af' },
						{ name: 'Duration', val: l => (6 + l * 2) + ' seconds', color: '#9ca3af' },
						{ name: 'Damage over time', val: l => 1 + l, color: '#00aaff' },
						{ name: 'Spreads to nearby allies', val: l => '', color: '#00aaff' }
					]
				},
				weaken: {
					name: 'Weaken',
					desc: 'Saps the strength of the target, reducing their damage output.',
					icon: 'spell10.png',
					stats: [
						{ name: 'Cooldown', val: l => '15 seconds', color: '#9ca3af' },
						{ name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
						{ name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
						{ name: 'Range', val: l => '15 meters', color: '#9ca3af' },
						{ name: 'Duration', val: l => (8 + l * 2) + ' seconds', color: '#9ca3af' },
						{ name: 'Damage reduction', val: l => (15 + l * 5) + '%', color: '#00aaff' }
					]
				},
				corruption: {
					name: 'Corruption',
					desc: 'Corrupts the target, turning their healing into damage.',
					icon: 'spell11.png',
					stats: [
						{ name: 'Cooldown', val: l => '20 seconds', color: '#9ca3af' },
						{ name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
						{ name: 'Cast time', val: l => '1.5 seconds', color: '#9ca3af' },
						{ name: 'Range', val: l => '15 meters', color: '#9ca3af' },
						{ name: 'Duration', val: l => (5 + l) + ' seconds', color: '#9ca3af' },
						{ name: 'Healing becomes damage', val: l => (50 + l * 10) + '%', color: '#00aaff' }
					]
				},
				fear: {
					name: 'Fear',
					desc: 'Instills terror in the target, forcing them to flee.',
					icon: 'spell12.png',
					stats: [
						{ name: 'Cooldown', val: l => '25 seconds', color: '#9ca3af' },
						{ name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
						{ name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
						{ name: 'Range', val: l => '12 meters', color: '#9ca3af' },
						{ name: 'Duration', val: l => (2 + l) + ' seconds', color: '#9ca3af' },
						{ name: 'Target flees uncontrollably', val: l => '', color: '#00aaff' },
						{ name: 'Breaks on damage', val: l => '', color: '#ff557f' }
					]
				},
				curseMark: {
					name: 'Curse Mark',
					desc: 'Brands the target with a curse that amplifies damage taken.',
					icon: 'spell13.png',
					stats: [
						{ name: 'Cooldown', val: l => '18 seconds', color: '#9ca3af' },
						{ name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
						{ name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
						{ name: 'Range', val: l => '15 meters', color: '#9ca3af' },
						{ name: 'Duration', val: l => (10 + l * 2) + ' seconds', color: '#9ca3af' },
						{ name: 'Damage amplification', val: l => (10 + l * 5) + '%', color: '#00aaff' }
					]
				},
				voidForm: {
					name: 'Void Form',
					desc: 'Transforms into a being of pure void energy, gaining immense power.',
					icon: 'spell15.png',
					stats: [
						{ name: 'Cooldown', val: l => '60 seconds', color: '#9ca3af' },
						{ name: 'Global cooldown', val: l => '3 seconds', color: '#9ca3af' },
						{ name: 'Cast time', val: l => '2 seconds', color: '#9ca3af' },
						{ name: 'Duration', val: l => (8 + l * 2) + ' seconds', color: '#9ca3af' },
						{ name: 'Damage increased', val: l => (30 + l * 10) + '%', color: '#55ff7f' },
						{ name: 'Movement speed increased 50%', val: l => '', color: '#55ff7f' },
						{ name: 'Health drain per second', val: l => 3 + l, color: '#ff557f' }
					]
				}
			}
		},
		entropy: {
			name: 'Entropy',
			skills: {
				decay: {
					name: 'Decay',
					desc: 'Causes the target to slowly deteriorate.',
					icon: 'spell17.png',
					stats: [
						{ name: 'Cooldown', val: l => '6 seconds', color: '#9ca3af' },
						{ name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
						{ name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
						{ name: 'Range', val: l => '15 meters', color: '#9ca3af' },
						{ name: 'Duration', val: l => '10 seconds', color: '#9ca3af' },
						{ name: 'Damage over time', val: l => 2 + l * 2, color: '#00aaff' }
					]
				},
				entropy: {
					name: 'Entropy',
					desc: 'Randomly scrambles the cooldowns of target abilities.',
					icon: 'spell18.png',
					stats: [
						{ name: 'Cooldown', val: l => '30 seconds', color: '#9ca3af' },
						{ name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
						{ name: 'Cast time', val: l => (3 - Math.floor(l / 2)) + ' seconds', color: '#9ca3af' },
						{ name: 'Range', val: l => '15 meters', color: '#9ca3af' },
						{ name: 'Randomizes cooldowns', val: l => '', color: '#00aaff' },
						{ name: 'Effect intensity', val: l => l * 20 + '%', color: '#00aaff' }
					]
				},
				unravel: {
					name: 'Unravel',
					desc: 'Destabilizes target armor and resistances.',
					icon: 'summit.png',
					stats: [
						{ name: 'Cooldown', val: l => '12 seconds', color: '#9ca3af' },
						{ name: 'Global cooldown', val: l => '1 second', color: '#9ca3af' },
						{ name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
						{ name: 'Range', val: l => '15 meters', color: '#9ca3af' },
						{ name: 'Duration', val: l => (6 + l * 2) + ' seconds', color: '#9ca3af' },
						{ name: 'Armor reduction', val: l => (20 + l * 5) + '%', color: '#00aaff' }
					]
				},
				chaos: {
					name: 'Chaos',
					desc: 'Unleashes unpredictable energy with random effects.',
					icon: 'spell27.png',
					stats: [
						{ name: 'Cooldown', val: l => '15 seconds', color: '#9ca3af' },
						{ name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
						{ name: 'Cast time', val: l => '1 second', color: '#9ca3af' },
						{ name: 'Range', val: l => '12 meters', color: '#9ca3af' },
						{ name: 'Random effect applied', val: l => '', color: '#00aaff' },
						{ name: 'Effect power', val: l => 5 + l * 5, color: '#00aaff' }
					]
				},
				voidWalk: {
					name: 'Void Walk',
					desc: 'Phases out of reality, becoming untargetable.',
					icon: 'spell28.png',
					stats: [
						{ name: 'Cooldown', val: l => '40 seconds', color: '#9ca3af' },
						{ name: 'Global cooldown', val: l => '2 seconds', color: '#9ca3af' },
						{ name: 'Cast time', val: l => 'Instant', color: '#9ca3af' },
						{ name: 'Duration', val: l => (3 + l) + ' seconds', color: '#9ca3af' },
						{ name: 'Untargetable', val: l => '', color: '#55ff7f' },
						{ name: 'Cannot attack', val: l => '', color: '#ff557f' },
						{ name: 'Movement speed +50%', val: l => '', color: '#55ff7f' }
					]
				},
				annihilation: {
					name: 'Annihilation',
					desc: 'Channels destructive void energy that grows stronger over time.',
					icon: 'spell29.png',
					stats: [
						{ name: 'Cooldown', val: l => '45 seconds', color: '#9ca3af' },
						{ name: 'Global cooldown', val: l => '4 seconds', color: '#9ca3af' },
						{ name: 'Channel time', val: l => '4 seconds', color: '#9ca3af' },
						{ name: 'Range', val: l => '20 meters', color: '#9ca3af' },
						{ name: 'Initial damage', val: l => 40 + l * 5, color: '#00aaff' },
						{ name: 'Damage per second', val: l => '+' + (10 + l * 5), color: '#00aaff' },
						{ name: 'Channeling can be interrupted', val: l => '', color: '#ff557f' }
					]
				}
			}
		}
	}
}
