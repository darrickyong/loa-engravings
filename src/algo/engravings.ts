export enum Combat {
  'Adrenaline' = 'Adrenaline',
  'All Out Attack' = 'All Out Attack',
  'Ambush Master' = 'Ambush Master',
  'Awakening' = 'Awakening',
  'Barricade' = 'Barricade',
  'Broken Bone' = 'Broken Bone',
  'Contender' = 'Contender',
  'Crisis Evasion' = 'Crisis Evasion',
  'Crushing Fist' = 'Crushing Fist',
  'Cursed Doll' = 'Cursed Doll',
  'Disrespect' = 'Disrespect',
  'Divine Protection' = 'Divine Protection',
  'Drops of Ether' = 'Drops of Ether',
  'Emergency Rescue' = 'Emergency Rescue',
  'Enhanced Shield' = 'Enhanced Shield',
  'Ether Predator' = 'Ether Predator',
  'Expert' = 'Expert',
  'Explosive Expert' = 'Explosive Expert',
  'Fortitude' = 'Fortitude',
  'Grudge' = 'Grudge',
  'Heavy Armor' = 'Heavy Armor',
  'Hit Master' = 'Hit Master',
  'Keen Blunt Weapon' = 'Keen Blunt Weapon',
  'Lightning Fury' = 'Lightning Fury',
  'Magick Stream' = 'Magick Stream',
  'Mass Increase' = 'Mass Increase',
  'Master Brawler' = 'Master Brawler',
  'Master of Escape' = 'Master of Escape',
  "Master's Tenacity" = "Master's Tenacity",
  'Max MP Increase' = 'Max MP Increase',
  'MP Efficiency Increase' = 'MP Efficiency Increase',
  'Necromancy' = 'Necromancy',
  'Precise Dagger' = 'Precise Dagger',
  'Preemptive Strike' = 'Preemptive Strike',
  'Propulsion' = 'Propulsion',
  'Raid Captain' = 'Raid Captain',
  'Shield Piercing' = 'Shield Piercing',
  'Sight Focus' = 'Sight Focus',
  'Spirit Absorption' = 'Spirit Absorption',
  'Stabilized Status' = 'Stabilized Status',
  'Strong Will' = 'Strong Will',
  'Super Charge' = 'Super Charge',
  'Vital Point Hit' = 'Vital Point Hit',
}

export enum Class {
  'Arthetinean Skill' = 'Arthetinean Skill',
  'Barrage Enhancement' = 'Barrage Enhancement',
  "Berserker's Technique" = "Berserker's Technique",
  'Blessed Aura' = 'Blessed Aura',
  'Combat Readiness' = 'Combat Readiness',
  'Communication Overflow' = 'Communication Overflow',
  'Control' = 'Control',
  'Death Strike' = 'Death Strike',
  'Deathblow' = 'Deathblow',
  'Demonic Impulse' = 'Demonic Impulse',
  'Desperate Salvation' = 'Desperate Salvation',
  'Empresss Grace' = "Empress's Grace",
  'Energy Overflow' = 'Energy Overflow',
  'Enhanced Weapon' = 'Enhanced Weapon',
  'Esoteric Flurry' = 'Esoteric Flurry',
  'Esoteric Skill Enhancement' = 'Esoteric Skill Enhancement',
  'Evolutionary Legacy' = 'Evolutionary Legacy',
  'Firepower Enhancement' = 'Firepower Enhancement',
  'First Intention' = 'First Intention',
  'Full Bloom' = 'Full Bloom',
  'Gravity Training' = 'Gravity Training',
  'Hunger' = 'Hunger',
  'Igniter' = 'Igniter',
  'Judgment' = 'Judgment',
  'Lone Knight' = 'Lone Knight',
  'Loyal Companion' = 'Loyal Companion',
  'Lunar Voice' = 'Lunar Voice',
  'Master Summoner' = 'Master Summoner',
  'Mayhem' = 'Mayhem',
  'Order of the Emperor' = 'Order of the Emperor',
  'Peacemaker' = 'Peacemaker',
  'Perfect Suppression' = 'Perfect Suppression',
  'Pinnacle' = 'Pinnacle',
  'Pistoleer' = 'Pistoleer',
  'Predator' = 'Predator',
  'Punisher' = 'Punisher',
  'Rage Hammer' = 'Rage Hammer',
  'Recurrence' = 'Recurrence',
  'Reflux' = 'Reflux',
  'Remaining Energy' = 'Remaining Energy',
  'Robust Spirit' = 'Robust Spirit',
  'Shock Training' = 'Shock Training',
  'Surge' = 'Surge',
  'Time to Hunt' = 'Time to Hunt',
  'True Courage' = 'True Courage',
  'Ultimate Skill: Taijutsu' = 'Ultimate Skill: Taijutsu',
}

export const engravingKeys = Object.keys(Combat).concat(Object.keys(Class));

export const EngravingValues = {
  Adrenaline: {
    description:
      'After using skills (excluding movement skills and basic attacks), gains +0.3% / 0.6% / 1% Atk. Power for 6 seconds, stacking up to 6 times, up to a maximum of 1.8% / 3.6% / 6% Atk. Power. At maximum stacks, Crit Rate +5% / 10% / 15%. If Cooldown reduction due to skill cancel is applied to this effect, it is applied after the end of the skill.',
    img: '/engravings.Adrenaline.webp',
  },
  'All Out Attack': {
    description: 'Holding and Casting skill speed +5% / 10% / 20% and damage +4% / 10% / 20%.',
    img: '/engraving/All Out Attack.webp',
  },
  'Ambush Master': {
    desription: 'Damage +5% / 12% / 25% for successful back attacks.',
    img: '/engraving/Ambush Master.webp',
  },
  Awakening: {
    desription: 'Awakening Skill Cooldown -10% / 25% / 50% and +1 / 2 / 3 maximum use.',
    img: '/engraving/Awakening.webp',
  },
  Barricade: { desription: 'Damage to foes while shielded +3% / 8% / 16%.', img: '/engraving/Barricade.webp' },
  'Broken Bone': { desription: 'Damage to staggered foes +7.5% / 20% / 40%.', img: '/engraving/Broken Bone.webp' },
  Contender: {
    desription:
      'Atk. Power +1% / 1.5% / 2.5% for 15 / 25 / 40 seconds after killing a foe. Stacks up to 5 / 6 / 7 times, for a maximum of +5% / 9% / 17.5% Atk. Power.',
    img: '/engraving/Contender.webp',
  },
  'Crisis Evasion': {
    desription:
      'When receiving fatal damage, become invincible for 3 seconds, recovering 50% of the damage taken during invincibility as HP (15 / 12 / 9 minute cooldown).',
    img: '/engraving/Crisis Evasion.webp',
  },
  'Crushing Fist': {
    desription:
      'On successful Counter Attack, Atk. Power +4% / 10% / 20%. For 3 seconds Countered target takes +2% / 4% / 8% damage from all party members.',
    img: '/engraving/Crushing Fist.webp',
  },
  'Cursed Doll': {
    desription: 'Atk. Power +3% / 8% / 16%, Healing -25%, natural recovery excluded.',
    img: '/engraving/Cursed Doll.webp',
  },
  Disrespect: { desription: 'Damage +9% / 22% / 36% to foes with 30% or lower HP.', img: '/engraving/Disrespect.webp' },
  'Divine Protection': {
    desription:
      'When attacked, there is a 20% chance of activing Divine Protection which reduces the damage received by 60% (60 / 20 / 10 second cooldown).',
    img: '/engraving/Divine Protection.webp',
  },
  'Drops of Ether': {
    desription:
      'Attacks have a chance to create an Ether within 8 meters that the player or their ally can collect to trigger an effect (60 / 30 / 10 second cooldown).',
    img: '/engraving/Drops of Ether.webp',
  },
  'Emergency Rescue': {
    desription:
      'When HP falls below 30%, gain a shield equal to 20% / 30% / 50% of Max HP for 6 seconds. If the shield is not destroyed after 6 seconds, recover 50% of the remaining shield as HP (300 / 240 / 180 second cooldown).',
    img: '/engraving/Emergency Rescue.webp',
  },
  'Enhanced Shield': {
    desription:
      "Become immune to all Status Debuffs while affected by shields, but -90% / 75% / 50% Shields' HP and Defensive Stance's Damage absorption amounts (does not apply to Battlefield Shield).",
    img: '/engraving/Enhanced Shield.webp',
  },
  'Ether Predator': {
    desription:
      'Attacking a foe creates an Ether that only you can collect (10 second cooldown). Collecting the Ether grants 1 stack for 90 seconds. Chance on Ether collection to increases the stack by 3. Each stack grants Atk. Power +0.2% / 0.3% / 0.5% and All Defense +0.3% / 0.6% / 1%. Stacks up to 30 times, for a maximum of +6% / 9% / 15% Atk. Power and +9% / 18% / 30% All Defense.',
    img: '/engraving/Ether Predator.webp',
  },
  Expert: {
    desription:
      "Shield and Healing effectiveness on all Party Members +6% / 14% / 24%. If target's HP is 50% or lower, +3% / 7% / 12% additional effectiveness.",
    img: '/engraving/Expert.webp',
  },
  'Explosive Expert': {
    desription: 'Bomb and grenade Battle Item carrying limit +1 / 2 / 3.',
    img: '/engraving/Explosive Expert.webp',
  },
  Fortitude: {
    desription: 'Incoming Damage is reduced proportional to HP lost, up to a maximum of 5% / 15% / 30%.',
    img: '/engraving/Fortitude.webp',
  },
  Grudge: {
    desription: 'Damage +4% / 10% / 20% to Boss or above monsters. All incoming damage +20%.',
    img: '/engraving/Grudge.webp',
  },
  'Heavy Armor': {
    desription: 'All Defense +20% / 50% / 100%. This additional Defense is immune to Defense Reduction effects.',
    img: '/engraving/Heavy Armor.webp',
  },
  'Hit Master': {
    desription:
      'Damage of attacks other than Back Attack and Frontal Attack +3% / 8% / 16%. Does not apply to Awakening Skills.',
    img: '/engraving/Hit Master.webp',
  },
  'Keen Blunt Weapon': {
    desription: '+10% / 25% / 50% Crit Damage but your attacks have a 10% chance to deal damage -20%.',
    img: '/engraving/Keen Blunt Weapon.webp',
  },
  'Lightning Fury': {
    desription:
      'Attacks have a 60% chance of generating a lightning orb. These lightning orbs can only be generated once every 4 / 2 / 1 seconds. When 5 orbs are created, they explode and damage surrounding foes.',
    img: '/engraving/Lightning Fury.webp',
  },
  'Magick Stream': {
    desription:
      'Stacks up to +5% / 10% / 15% MP Recovery every 3 seconds while you are not attacked. When the maximum stack is reached, skill Cooldown -3% / 6% / 10%. Being hit removes 1 stack of the effect with a cooldown of 10 seconds.',
    img: '/engraving/Magick Stream.webp',
  },
  'Mass Increase': { desription: 'Atk. Power +4% / 10% / 18%, Atk. Speed -10%.', img: '/engraving/Mass Increase.webp' },
  'Master Brawler': {
    desription: 'Damage +5% / 12% / 25% for successful frontal attacks.',
    img: '/engraving/Master Brawler.webp',
  },
  'Master of Escape': {
    desription: 'Stand Up Action Cooldown -4% / 12% / 25%.',
    img: '/engraving/Master of Escape.webp',
  },
  "Master's Tenacity": {
    desription: 'Outgoing damage +3% / 8% / 16% at 50% or lower HP.',
    img: "/engraving/Master's Tenacity.webp",
  },
  'Max MP Increase': { desription: 'Max MP +5% / 15% / 30%.', img: '/engraving/Max MP Increase.webp' },
  'MP Efficiency Increase': {
    desription: 'MP Recovery +5% / 15% / 30%. When MP is at 50% or below, damage to foes +3% / 6% / 12%.',
    img: '/engraving/MP Efficiency Increase.webp',
  },
  Necromancy: {
    desription: 'Attacks summon temporary soldiers that damage foes (75 / 30 / 15 second cooldown).',
    img: '/engraving/Necromancy.webp',
  },
  'Precise Dagger': {
    desription: 'Crit Rate +4% / 10% / 20%, Crit Damage -12%.',
    img: '/engraving/Precise Dagger.webp',
  },
  'Preemptive Strike': {
    desription:
      'When attacking Challenge or lower monsters with full HP, your attack is a guaranteed crit with +30% / 80% / 160% damage.',
    img: '/engraving/Preemptive Strike.webp',
  },
  Propulsion: {
    desription:
      'After using a Movement Skill, damage of skills (excluding Basic Attack and Awakening Skills) +3% / 8% / 16% for 5 seconds.',
    img: '/engraving/Propulsion.webp',
  },
  'Raid Captain': {
    desription: 'Outgoing damage +10% / 22% / 45% of basic Move Speed bonus percentage.',
    img: '/engraving/Raid Captain.webp',
  },
  'Shield Piercing': { desription: 'Damage to shields +16% / 50% / 100%.', img: '/engraving/Shield Piercing.webp' },
  'Sight Focus': {
    desription:
      'When "!!!!!" is entered into normal chat, Sight Focus is activated for 6 seconds (30 second cooldown). After the effect is activated, offensive skill damage +8% / 16% / 28%. Only half of the effect is applied to Awakening Skills (4% / 8% / 14%). Does not apply to Basic Attack.',
    img: '/engraving/Sight Focus.webp',
  },
  'Spirit Absorption': {
    desription: 'Atk. Speed and Move Speed +3% / 8% / 15%.',
    img: '/engraving/Spirit Absorption.webp',
  },
  'Stabilized Status': {
    desription: 'Damage +3% / 8% / 16% when your HP is above 80%.',
    img: '/engraving/Stabilized Status.webp',
  },
  'Strong Will': { desription: 'Incoming damage -5% / 15% / 30% while Pushed.', img: '/engraving/Strong Will.webp' },
  'Super Charge': {
    desription: "Charge skills' charging speed +8% / 20% / 40% and damage +4% / 10% / 20%.",
    img: '/engraving/Super Charge.webp',
  },
  'Vital Point Hit': {
    desription: 'Stagger attack effectiveness +6% / 18% / 36%.',
    img: '/engraving/Vital Point Hit.webp',
  },
  'Arthetinean Skill': {
    desription:
      'Increases damage of Normal, Drone and Joint skills by 15% / 20% / 25%, and increases Battery Max by 10% / 15% / 20%. Increase Move Speed by 10% when a Drone is attached to the Machinist.',
    img: '/engraving/Arthetinean Skill.webp',
  },
  'Barrage Enhancement': {
    desription:
      'Barrage Skill damage +5% / 12% / 20%, and Barrage Skill crit rate +20% / 30% / 40%. Barrage Meter gain +30% and removes the cooling state.',
    img: '/engraving/Barrage Enhancement.webp',
  },
  "Berserker's Technique": {
    desription: 'During Burst, Damage +16% / 25% / 36%. Negates Exhaustion after Burst ends.',
    img: "/engraving/Berserker's Technique.webp",
  },
  'Blessed Aura': {
    desription:
      'With Holy Aura, damage received -10% / 15% / 20% and restores 2% of max HP every 2.5 / 2 / 1.5 seconds for all party members.',
    img: '/engraving/Blessed Aura.webp',
  },
  'Combat Readiness': {
    desription:
      'Normal Skills damage +25% / 27.5% / 30%. When in Defensive Stance, shield amount +30% / 40% / 50%. When in Defensive Stance, damage +2% / 3% / 4% for 10 seconds when hitting or when hit, stacking up to 3 times (once every second), up to a maximum of 6% / 9% / 12%.',
    img: '/engraving/Combat Readiness.webp',
  },
  'Communication Overflow': {
    desription:
      'Summon duration +5% / 10% / 20% for Maririn, Pauru, Elcid, Shurdi, and Kelsion. Damage +10% / 17% / 25%. Atk. Speed and Move Speed +3% / 6% / 10%. Command Skill Cooldown -3% / 6% / 10%.',
    img: '/engraving/Communication Overflow.webp',
  },
  Control: {
    desription: 'Cannot use Focus stance. Flurry skills damage +20% / 30% / 40%.',
    img: '/engraving/Control.webp',
  },
  'Death Strike': {
    desription:
      'When using Last Rush, recover 50% of the remaining Hawk Meter and for 8 seconds the target hit takes 30% / 40% / 50% increased damage.',
    img: '/engraving/Death Strike.webp',
  },
  Deathblow: {
    desription:
      'Max number of Esoteric Orbs +1. Esoteric skills consume all Esoteric Orbs and inflict +17% / 26% / 35% damage per additional Esoteric Orb consumed.',
    img: '/engraving/Deathblow.webp',
  },
  'Demonic Impulse': {
    desription:
      'The Composure effect does not activate when Demonize ends. Upon Demonize, Demonic Skill Cooldown is reset, and Crit Rate +0% / 15% / 30% while Demonic Mode is active.',
    img: '/engraving/Demonic Impulse.webp',
  },
  'Desperate Salvation': {
    desription:
      'When the recovery effect ends, an additional recovery effect is activated, recovering 8% / 16% / 24% of your max HP.',
    img: '/engraving/Desperate Salvation.webp',
  },
  "Empress's Grace": {
    desription: '4-stack Ruin damage +20% / 25% / 30%. When Ruin hits, recover 30% of consumed MP.',
    img: "/engraving/Empress's Grace.webp",
  },
  'Energy Overflow': {
    desription:
      'Energy does not go below 1, but additional Energy Recovery effect is not applied during Hype. If Energy is below 30%, damage to foes +5% / 10% / 15%.',
    img: '/engraving/Energy Overflow.webp',
  },
  'Enhanced Weapon': {
    desription: 'Changing Stances enhances your weapon, granting +20% / 25% / 30% Crit Rate for 9 seconds.',
    img: '/engraving/Enhanced Weapon.webp',
  },
  'Esoteric Flurry': {
    desription: 'Only 1 Esoteric Orb is used when using Esoteric Skill, and Esoteric Skill Damage +8% / 13% / 18%.',
    img: '/engraving/Esoteric Flurry.webp',
  },
  'Esoteric Skill Enhancement': {
    desription:
      'Max number of Esoteric Orbs +1. Esoteric skills inflict +8% / 10% / 12% damage per Esoteric Orb you have.',
    img: '/engraving/Esoteric Skill Enhancement.webp',
  },
  'Evolutionary Legacy': {
    desription:
      'During Hypersync Mode, on hit, Sync skills inflict +2% / 4% / 6% damage, stacking up to 3 times, for a maximum of 6% / 12% / 18%, and cooldown -0.5 seconds. Also, Hypersync Mode returns 40% of its Core Energy cost when canceled. Entering Hypersync Mode resets all Sync Skills cooldowns.',
    img: '/engraving/Evolutionary Legacy.webp',
  },
  'Firepower Enhancement': {
    desription:
      'When the Firepower Meter is full, the overheat effect is activated, Normal Skills damage +5% / 12% / 25%. Firepower Meter duration increased to 10 / 12 / 14 seconds. Damage taken -5% / 10% / 15% while not in Barrage Mode.',
    img: '/engraving/Firepower Enhancement.webp',
  },
  'First Intention': {
    desription: 'Damage to foes +16% / 24% / 32%, but you can no longer gain Esoteric Meter.',
    img: '/engraving/First Intention.webp',
  },
  'Full Bloom': {
    desription:
      "When casting Sunrise, the energy spreads to recover HP of Party Members within 24 meters of the Artist and Sun Marble. It recovers up to 7% / 11% / 15% of the Artist's Max HP.",
    img: '/engraving/Full Bloom.webp',
  },
  'Gravity Training': {
    desription:
      'When using Gravity Release Skills, gain 20% / 45% / 70% additional Gravity Meter. Basic Attack and Vortex Gravity Crit Rate +10% / 20% / 30% and +4% / 10% / 20% Attack Damage to foes during Hypergravity Mode. If the Hypergravity attack hits the same enemy 3 times, it inflicts "Gravity Shock", which deals additional damage. Damage inflicted by Gravity Shock is influenced by Hypergravity Skill damage.',
    img: '/engraving/Gravity Training.webp',
  },
  Hunger: {
    desription: 'Chaos Meter +30%. Atk. Power +16% / 22% / 30% when the Chaos Meter is full.',
    img: '/engraving/Hunger.webp',
  },
  Igniter: {
    desription:
      "When Magick Amplification is triggered, normal skills' Cooldown -50%. During Magick Amplification, Crit Rate +10% / 17% / 25% and Crit Damage +20% / 35% / 50%.",
    img: '/engraving/Igniter.webp',
  },
  Judgment: {
    desription:
      'Punishment Damage +15% / 22.5% / 30%. When Punishment skill hits, Piety Meter gain +100%. Duration of Sacred Executioner +100% / 125% / 150%.',
    img: '/engraving/Judgment.webp',
  },
  'Lone Knight': {
    desription:
      'Gunlance skill Crit Rate +5% / 10% / 15% and Crit Damage +30% / 40% / 50%. Battlefield Shield cannot be used. Shield Meter consumption during Defensive Stance +100%.',
    img: '/engraving/Lone Knight.webp',
  },
  'Loyal Companion': {
    desription:
      "Summons Silverhawk MK-II, granting +4% Move Speed, increasing Silverhawk's Basic AoE Radius by 60%, Silverhawk's crit rate by 10% / 20% / 40%, and Silverhawk's summon duration by 30% / 60% / 100%. On Basic Attack or Wings of Storm hit, foes get a Mark of Death: foe Damage taken +3% / 7% / 12%. When Silverhawk is summoned Atk. Power +1% / 3% / 6%.",
    img: '/engraving/Loyal Companion.webp',
  },
  'Lunar Voice': {
    desription:
      'Swoop Damage +120% / 140% / 160% instead of the Swoop Enhancement effect that stacks every second upon switching to Persona Mode. Also gain 10% Atk Speed upon switching to Persona Mode.',
    img: '/engraving/Lunar Voice.webp',
  },
  'Master Summoner': {
    desription:
      'Enhances the Ancient Elemental Skill. Elemental Orb cost -1. Normal Skill Damage and Ancient Elemental Skill Damage +2% / 6% / 12% and Crit Rate +3% / 8% / 16%.',
    img: '/engraving/Master Summoner.webp',
  },
  Mayhem: {
    desription:
      'Outgoing damage +3% / 8% / 16%, Atk. and Move Speed +15%, all incoming damage -70%. When activating Dark Mayhem, converts into 25% Max HP, and it cannot be exceed even when Healing is applied. Can only receive 40% of healing effects and 25% of shield effects. Press the [X] key to cancel Dark Mayhem to recover 25% of Max HP, but cannot enter Dark Mayhem for 30 seconds.',
    img: '/engraving/Mayhem.webp',
  },
  'Order of the Emperor': {
    desription:
      'Normal Skills Damage +20% / 30% / 40% and an Emperor Card is added to the deck. Replaces Balance and Judgment cards with Chancellor and Sovereign cards. Emperor card Damage +0% / 30% / 80%.',
    img: '/engraving/Order of the Emperor.webp',
  },
  Peacemaker: {
    desription:
      'Switching Stances grants a buff for 9 seconds, these do not stack with each other. Handgun Stance: Atk. Speed +8% / 12% / 16%. Shotgun Stance: Crit Rate +10% and damage +5% / 10% / 15%. Rifle Stance: Damage +10% and additional damage +10% / 20% / 30% to targets with 50% or lower HP.',
    img: '/engraving/Peacemaker.webp',
  },
  'Perfect Suppression': {
    desription: 'Normal Skill damage +20% / 25% / 30%. Shadowburst Meter +50% for all skills. Disables Demonize.',
    img: '/engraving/Perfect Suppression.webp',
  },
  Pinnacle: {
    desription:
      'Adds Pinnacle - Flurry/Focus I / II / III instead of the Flurry/Focus Stage 3 effect added upon changing stances while the Dual Meter is maxed at Level 3.',
    img: '/engraving/Pinnacle.webp',
  },
  Pistoleer: {
    desription:
      'Can only use Handgun Stance. Handgun Skill Damage +35% / 60% / 85%. Stagger Damage +40%. Awakening Skill Damage +20% / 30% / 40%.',
    img: '/engraving/Pistoleer.webp',
  },
  Predator: {
    desription:
      'Hitting an enemy restores 3% / 6% / 10% of Fury Meter and 1% / 2% / 3% of max MP (1 second cooldown). While in Burst Mode, Crit Damage +10% / 25% / 40%, Bloodlust [Z] is disabled, and gain 1 stack of Fatigue every 3 seconds. Each stack of Fatigue increases Fury Meter depletion rate by 10%. When Burst Mode ends, the duration of Exhaustion is reduced by 1 second for each Fatigue stack. When Exhaustion ends, the Fury Meter is fully recovered.',
    img: '/engraving/Predator.webp',
  },
  Punisher: {
    desription:
      'While in Burst Mode, damage +7% / 15% / 25% and Bloodlust Crit Rate +5% / 10% / 20%. Fury gain -25% and Burst Mode duration -50%. When Burst ends, Exhaustion does not occur.',
    img: '/engraving/Punisher.webp',
  },
  'Rage Hammer': {
    desription:
      'When using a Gravity Release Skill, Crit Rate +3% / 4% / 5% and Crit Damage +5% / 10% / 15% based on the amount of Cores used.',
    img: '/engraving/Rage Hammer.webp',
  },
  Recurrence: {
    desription:
      "Upon using Moonfall or Sunrise, gain an effect that increases the Artist's Crit Rate by 6% / 9% / 12% and Crit Damage by 20% / 30% / 40% for 60 seconds.",
    img: '/engraving/Recurrence.webp',
  },
  Reflux: {
    desription:
      'Disables Arcane Rupture, but damage of skills (except Awakening and Movement skills) +10% / 15% / 20% and Cooldown -3% / 6% / 10%.',
    img: '/engraving/Reflux.webp',
  },
  'Remaining Energy': {
    desription:
      'Art does not consume Art Meter for 2 seconds when activated. Casting Surge grants, for 30 seconds, +6% / 9% / 12% Atk. Speed and Move Speed, and increased Atk. Power depending on your Surge level.',
    img: '/engraving/Remaining Energy.webp',
  },
  'Robust Spirit': {
    desription:
      'When using Hype, enters level 3 immediately. While in Hype Mode, Energy recovery speed +200%. Damage +10% / 20% / 30%.',
    img: '/engraving/Robust Spirit.webp',
  },
  'Shock Training': {
    desription: 'Shock Skill damage +10% / 15% / 20%. Recovers 2% / 3% / 4% of max Shock Energy every second.',
    img: '/engraving/Shock Training.webp',
  },
  Surge: {
    desription:
      'Surge is cast at the maximum level of Surge Zero form, regardless of the number of Death Orbs you have, and Surge does not activate the effect of Remaining Energy. When Arts is activated, each skill hit (Basic Attack and Awakening excluded), gain 1 stack of Surge Enhancement (0.4 second cooldown), up to a maximum of 20 stacks. Each stack increases the damage of Surge by 5% / 5.5% / 6% and Atk. Power by 0% / 0.5% / 1%, up to a maximum at 20 stacks of 100% / 110% / 120% Surge damage and 0% / 10% / 20% Atk. Power.',
    img: '/engraving/Surge.webp',
  },
  'Time to Hunt': {
    desription: 'Crit Rate +22% / 33% / 45%. Unable to use Shotgun Stance.',
    img: '/engraving/Time to Hunt.webp',
  },
  'True Courage': {
    desription: 'Outgoing damage from Serenade of Courage +10% / 15% / 20% and Crit Rate +10%.',
    img: '/engraving/True Courage.webp',
  },
  'Ultimate Skill: Taijutsu': {
    desription:
      'Natural recovery speed of Stamina Energy +300% / 450% / 600%. Stamina skill damage +35% / 50% / 65%. Shock Skill damage -30%.',
    img: '/engraving/Ultimate Skill: Taijutsu.webp',
  },
};
