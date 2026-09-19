// -------------------------------------------------------------
// Dead Rails Wiki — Verified Data
// Source of truth: tier1-rescue/real-data/deadrails.md
// Verified against: deadrails.fandom.com, TheGamer, Beebom,
// Destructoid, Namu wiki (retrieved 2026-09-19).
// Any field that could not be confirmed is "not documented".
// -------------------------------------------------------------

export const DATA_VERIFIED_DATE = '2026-09-19';
export const DATA_SOURCES = [
  { name: 'Dead Rails Fandom Wiki', url: 'https://deadrails.fandom.com' },
  { name: 'TheGamer — Every Enemy In Dead Rails', url: 'https://www.thegamer.com/roblox-dead-rails-enemies-guide' },
  { name: 'Destructoid — Dead Rails Classes Tier List', url: 'https://www.destructoid.com/dead-rails-classes-guide-tier-list' },
];

export interface EnemyEntity {
  id: string;
  name: string;
  threatLevel: 'Class S' | 'Class A' | 'Class B' | 'Class C';
  hp: string;
  speed: string;
  danger: string;
  weakness: string;
  counterTactics: string;
}

export interface UniqueLocation {
  name: string;
  distanceRangeKm: string;
  dangerRating: 'Low' | 'Moderate' | 'High' | 'EXTREME';
  keyEnemies: string;
  keyLoot: string;
  locationNotes: string;
}

export interface WeaponItem {
  id: string;
  name: string;
  category: 'Shotgun' | 'Rifle' | 'Melee';
  tier: 'S+' | 'S' | 'A' | 'B';
  stats: string;
  description: string;
}

export interface GameClass {
  id: string;
  name: string;
  category: 'Combat' | 'Support' | 'Utility';
  keyAbility: string;
  passiveBonus: string;
  tierNote: string;
  playstyle: string;
}

export interface RedeemCode {
  code: string;
  reward: string;
  status: 'ACTIVE' | 'EXPIRED';
  addedDate: string;
}

export const REDEEM_CODES: RedeemCode[] = [];

// -------------------------------------------------------------
// ENEMIES (verified list — exact HP values: not documented,
// pending per-entity check on deadrails.fandom.com)
// -------------------------------------------------------------

export const ENEMIES: EnemyEntity[] = [
  {
    id: 'normal-zombie',
    name: 'Normal Zombie',
    threatLevel: 'Class C',
    hp: 'not documented (low HP)',
    speed: 'Slow',
    danger: 'Most common enemy. Only spawns around houses and towns. Banker Zombie variant drops the bank vault code when killed.',
    weakness: 'Any firearm works; melee also viable.',
    counterTactics: 'Shoot from range, or back away while meleeing. Check banks for the Banker Zombie before looting the vault.'
  },
  {
    id: 'runner-zombie',
    name: 'Runner Zombie',
    threatLevel: 'Class B',
    hp: 'not documented (low HP)',
    speed: 'Fast — can catch up to players',
    danger: 'Spawns around players and the train on regular nights and will chase you down.',
    weakness: 'Firearms only — melee is unreliable against moving targets.',
    counterTactics: 'Use guns. A shotgun at close range one-shots them.'
  },
  {
    id: 'zombie-soldier',
    name: 'Zombie Soldier',
    threatLevel: 'Class B',
    hp: 'not documented (low HP, same as normal zombies)',
    speed: 'Runner-level speed',
    danger: 'Damage depends on the firearm they carry — they shoot back.',
    weakness: 'Exposed while reloading.',
    counterTactics: 'Engage with a rifle from long distance before they close in.'
  },
  {
    id: 'captain-prescott',
    name: 'Captain Prescott',
    threatLevel: 'Class A',
    hp: 'not documented (low HP, same as normal zombies)',
    speed: 'Runner-level speed',
    danger: 'Zombie Soldier leader. Only spawns around Fort Constitution.',
    weakness: 'No special defenses documented.',
    counterTactics: 'Kill with a rifle from range. His corpse sells to the Sheriff for a high price.'
  },
  {
    id: 'vampire',
    name: 'Vampire',
    threatLevel: 'Class A',
    hp: 'not documented (higher than zombies)',
    speed: 'Fast — teleports to close distance',
    danger: 'Blood Moon and castle-area exclusive. Vanishes at daytime (corpse remains). Deals slightly more damage than zombies.',
    weakness: 'Teleport has an audible cue.',
    counterTactics: 'Listen for the teleport sound as a warning. Avoid staying indoors during a Blood Moon night — it is too dark to fight.'
  },
  {
    id: 'werewolf',
    name: 'Werewolf',
    threatLevel: 'Class S',
    hp: 'not documented (among the strongest in the game)',
    speed: 'Fast and aggressive',
    danger: 'Spawns on Full Moon nights, around castles, and rarely inside wolf packs. Glowing red eyes; high damage.',
    weakness: 'not documented (high HP pool)',
    counterTactics: 'Multiple shotgun blasts, or engage from open ground at long range with a rifle.'
  },
  {
    id: 'outlaw',
    name: 'Outlaw',
    threatLevel: 'Class B',
    hp: 'not documented (low HP)',
    speed: 'On foot or on horseback',
    danger: 'High close-range damage. Travels in groups of up to ~8 around desert Outlaw Camps.',
    weakness: 'Low HP — dies quickly to any gun.',
    counterTactics: 'Ride past on the train, or snipe with a rifle from distance.'
  },
  {
    id: 'wolf',
    name: 'Wolf',
    threatLevel: 'Class C',
    hp: 'not documented (very low HP)',
    speed: 'Fast, attacks in packs',
    danger: 'Pack animal in desert areas; occasionally mixed with Werewolves.',
    weakness: 'Very low HP.',
    counterTactics: 'Any weapon works; do not let the pack surround you. Corpses can be used as train fuel.'
  },
  {
    id: 'skeleton',
    name: 'Skeleton',
    threatLevel: 'Class B',
    hp: 'not documented',
    speed: 'not documented',
    danger: 'Spawns continuously inside Sterling Mines (~25 total per visit per the Fandom Sterling Mines page).',
    weakness: 'not documented',
    counterTactics: 'Expect sustained fights while looting Sterling Mines; bring plenty of ammo.'
  },
  {
    id: 'nikola-tesla',
    name: 'Nikola Tesla (summonable boss)',
    threatLevel: 'Class A',
    hp: 'not documented',
    speed: 'not documented',
    danger: 'Summonable at Tesla Lab; summoning yields 5-9 Bonds.',
    weakness: 'not documented',
    counterTactics: 'Summon when your build is ready — the Bonds payout is the reward, so prepare for a fight.'
  }
];

// Backwards-compatible alias
export const ZOMBIE_ENTITIES: EnemyEntity[] = ENEMIES;

// -------------------------------------------------------------
// UNIQUE LOCATIONS — 80 km total run, fortified town checkpoints
// every 10 km. Spawn distances vary slightly between sources;
// each run generates landmarks randomly.
// -------------------------------------------------------------

export const UNIQUE_LOCATIONS: UniqueLocation[] = [
  {
    name: 'Fortified Town Checkpoints (every 10 km)',
    distanceRangeKm: 'every 10 km of the 80 km route',
    dangerRating: 'Low',
    keyEnemies: 'Normal Zombies around houses; Banker Zombie at banks',
    keyLoot: 'Supplies, healing items, coal, bank vault loot',
    locationNotes: 'Fortified towns appear roughly every 10 km and are your chance to resupply, heal, and refuel the train.'
  },
  {
    name: 'Fort Constitution',
    distanceRangeKm: '~10-30 km or 50-60 km (one source reports 10-70 km)',
    dangerRating: 'High',
    keyEnemies: 'Zombie Soldiers + Captain Prescott',
    keyLoot: 'Captain Prescott corpse (sells high to the Sheriff), Notes',
    locationNotes: 'Cannot spawn between the same two fortified towns as Tesla Lab — sources report the two swap positions between runs.'
  },
  {
    name: 'Tesla Lab',
    distanceRangeKm: 'between 9-30 km and 50-60 km',
    dangerRating: 'Moderate',
    keyEnemies: 'not documented',
    keyLoot: 'Nikola Tesla summon (yields 5-9 Bonds), Notes',
    locationNotes: 'Summon Nikola Tesla here for a Bond payout. Mutually exclusive with Fort Constitution in the same run.'
  },
  {
    name: 'Sterling (Sterling Mines)',
    distanceRangeKm: 'not documented',
    dangerRating: 'High',
    keyEnemies: 'Skeletons (~25 spawn continuously once you enter)',
    keyLoot: 'Notes collectibles',
    locationNotes: 'Mine structure with sustained Skeleton spawns — bring ammo before going deep.'
  },
  {
    name: 'Stillwater',
    distanceRangeKm: 'not documented',
    dangerRating: 'Moderate',
    keyEnemies: 'not documented',
    keyLoot: 'not documented',
    locationNotes: 'A unique location listed on the Fandom Unique Locations page, appearing alongside the other landmarks.'
  },
  {
    name: 'Final Terminal (80 km)',
    distanceRangeKm: '80 km — end of the standard run',
    dangerRating: 'Low',
    keyEnemies: 'not documented',
    keyLoot: 'Run completion rewards / Bonds',
    locationNotes: 'Reach 80 km by train to finish the run and claim rewards for buying stronger Classes in the next lobby.'
  }
];

// Backwards-compatible alias
export const ROUTE_STATIONS: UniqueLocation[] = UNIQUE_LOCATIONS;

// -------------------------------------------------------------
// WEAPONS (verified archetypes — exact DPS/damage: not documented)
// -------------------------------------------------------------

export const WEAPON_TIER_LIST: WeaponItem[] = [
  {
    id: 'shotgun',
    name: 'Shotgun',
    category: 'Shotgun',
    tier: 'S+',
    stats: 'Exact DPS/damage: not documented — one-shots most enemies at close range',
    description: 'The best beginner gun. At close range it one-shots most enemies, including Runner Zombies and Wolves. Also the recommended answer to Werewolves, just with multiple shots.'
  },
  {
    id: 'rifle',
    name: 'Rifle',
    category: 'Rifle',
    tier: 'S',
    stats: 'Exact DPS/damage: not documented — headshots one-shot',
    description: 'Long-range precision. A headshot one-shots most targets, making it the safest way to handle Zombie Soldiers, Outlaws and Captain Prescott before they reach you. Requires scavenged ammo.'
  },
  {
    id: 'melee',
    name: 'Melee Weapons',
    category: 'Melee',
    tier: 'A',
    stats: 'Never breaks; hits one enemy per swing; can hit through thin walls',
    description: 'Melee never degrades, but only strikes one enemy at a time. Watch the wall-pierce quirk: enemies can hit you through walls too, so keep your distance when hugging cover.'
  }
];

// -------------------------------------------------------------
// CLASSES (bought with Bonds at the Lobby Tailor shop — verified
// class list & recommendations from Destructoid/Beebom tier lists.
// Class-specific perk details: not documented.)
// -------------------------------------------------------------

export const CLASS_ROLES: GameClass[] = [
  {
    id: 'werewolf',
    name: 'Werewolf',
    category: 'Combat',
    keyAbility: 'not documented',
    passiveBonus: 'not documented',
    tierNote: 'Top of community tier lists (Destructoid/Beebom).',
    playstyle: 'Aggressive combat class recommended by community tier lists for players who want raw power.'
  },
  {
    id: 'vampire',
    name: 'Vampire',
    category: 'Combat',
    keyAbility: 'not documented',
    passiveBonus: 'not documented',
    tierNote: 'Top of community tier lists (Destructoid/Beebom).',
    playstyle: 'High-tier combat class ranked alongside Werewolf in community tier lists.'
  },
  {
    id: 'conductor',
    name: 'Conductor',
    category: 'Utility',
    keyAbility: 'Improved train fuel efficiency',
    passiveBonus: 'Reduces coal needed per 10 km checkpoint segment from ~2.5 to 2 pieces.',
    tierNote: 'Top of community tier lists (Destructoid/Beebom).',
    playstyle: 'The fuel economy class. If your runs keep dying to a stalled train, this is the pick.'
  },
  {
    id: 'zombie',
    name: 'Zombie',
    category: 'Combat',
    keyAbility: 'Can eat corpses to heal',
    passiveBonus: 'Eating corpses grants a +5 damage bonus against Werewolves.',
    tierNote: 'High ranking in community tier lists.',
    playstyle: 'Turns every kill into food. Great sustain in long runs with plenty of fighting.'
  },
  {
    id: 'cowboy',
    name: 'Cowboy',
    category: 'Combat',
    keyAbility: 'not documented',
    passiveBonus: 'not documented',
    tierNote: 'High ranking in community tier lists.',
    playstyle: 'Combat class that community tier lists place near the top.'
  },
  {
    id: 'survivalist',
    name: 'Survivalist',
    category: 'Support',
    keyAbility: 'not documented',
    passiveBonus: 'not documented',
    tierNote: 'Common first-pick recommendation for new players.',
    playstyle: 'A beginner-friendly all-rounder — frequently the recommended first purchase.'
  },
  {
    id: 'doctor',
    name: 'Doctor',
    category: 'Support',
    keyAbility: 'not documented',
    passiveBonus: 'not documented',
    tierNote: 'Common first-pick recommendation for new players.',
    playstyle: 'Healing-focused support class, often recommended as a safe first purchase for beginners.'
  },
  {
    id: 'hunter',
    name: 'Hunter',
    category: 'Combat',
    keyAbility: 'not documented',
    passiveBonus: 'not documented',
    tierNote: 'Confirmed as an existing class (Fandom Classes page).',
    playstyle: 'Confirmed class in the Dead Rails roster; detailed perks not yet documented here.'
  }
];

// -------------------------------------------------------------
// FUEL & ECONOMY FACTS (verified — used by the fuel calculator)
// -------------------------------------------------------------

export const FUEL_FACTS = {
  totalRunKm: 80,
  checkpointIntervalKm: 10,
  coalPerSegment: 2.5,
  coalPerSegmentConductor: 2,
  teslaSummonBonds: '5-9 Bonds',
  starterCoalAdvice: 'Buy about 3 pieces of coal at the start as a safety buffer.',
  freeFuelSources: 'Newspapers, scrap, and the corpses of enemies and animals (corpses can also be sold to the Sheriff for cash).'
};
