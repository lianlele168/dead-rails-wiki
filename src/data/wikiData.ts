export interface FuelCalcParams {
  distanceKm: number;
  trainSpeedKmh: number;
  cargoWeightTons: number;
  engineLevel: number; // 1 to 4
  armorLevel: number; // 0 to 3
}

export interface WeaponItem {
  id: string;
  name: string;
  category: 'Shotgun' | 'Rifle' | 'SMG' | 'Melee' | 'Mounted' | 'Special';
  tier: 'S+' | 'S' | 'A' | 'B';
  dps: number;
  damage: number;
  fireRate: number; // RPM
  ammoType: '12 Gauge' | '7.62mm' | '9mm' | 'Fuel Tank' | 'Melee' | '5.56mm';
  magSize: number;
  description: string;
}

export interface TrainUpgrade {
  id: string;
  name: string;
  category: 'Engine' | 'Armor' | 'Weaponry' | 'Utility';
  tierLevel: number;
  costScrap: number;
  effect: string;
  speedModifierPercent: number;
  weightAddTons: number;
  recommendation: 'Must Have' | 'High ROI' | 'Situational' | 'Late Game';
}

export interface ZombieEntity {
  id: string;
  name: string;
  threatLevel: 'Class S' | 'Class A' | 'Class B' | 'Class C';
  hp: number;
  speed: string;
  danger: string;
  weakness: string;
  counterTactics: string;
}

export interface RedeemCode {
  code: string;
  reward: string;
  status: 'ACTIVE' | 'EXPIRED';
  addedDate: string;
}

export interface RouteStation {
  name: string;
  distanceFromStartKm: number;
  dangerRating: 'Low' | 'Moderate' | 'High' | 'EXTREME';
  fuelDropChance: string;
  keyLoot: string;
  outpostNotes: string;
}

export interface CargoItem {
  id: string;
  name: string;
  category: 'Metals' | 'Electronics' | 'Fuel/Chemicals' | 'Relic';
  baseScrapValue: number;
  weightKg: number;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  bestOutpostToSell: string;
  bonusMultiplier: number;
}

export interface ClassRole {
  id: string;
  name: string;
  roleType: 'Boiler/Engineer' | 'Gunner/Heavy' | 'Scout/Looter' | 'Medic/Support';
  keyAbility: string;
  passiveBonus: string;
  recommendedWeapons: string[];
  playstyle: string;
}

// -------------------------------------------------------------
// DATASETS
// -------------------------------------------------------------

export const font_mono = "font-mono";

export const REDEEM_CODES: RedeemCode[] = [
  { code: 'RAILRUN2026', reward: '500 Scrap + 2x Oil Drum Fuel', status: 'ACTIVE', addedDate: '2026-08-20' },
  { code: 'ZOMBIEEXPRESS', reward: 'Heavy Engine Booster + 250 Scrip', status: 'ACTIVE', addedDate: '2026-08-15' },
  { code: 'BOILERHEAT', reward: '1,000 Coal Fuel Units + Repair Hammer', status: 'ACTIVE', addedDate: '2026-08-10' },
  { code: 'DEADOUTPOST', reward: 'Shotgun Ammo Crate + 300 Scrap', status: 'ACTIVE', addedDate: '2026-08-01' },
  { code: 'ALPHACOMMUNITY', reward: '500 Scrap + 1x Medic Kit', status: 'EXPIRED', addedDate: '2026-06-01' },
];

export const WEAPON_TIER_LIST: WeaponItem[] = [
  {
    id: 'heavy-shotgun-trench',
    name: 'Trench Auto-Shotgun Mk.II',
    category: 'Shotgun',
    tier: 'S+',
    dps: 420,
    damage: 180,
    fireRate: 140,
    ammoType: '12 Gauge',
    magSize: 8,
    description: 'Devastating close-range horde clearer. One-shots Armored Chargers when aimed at helmet joint.'
  },
  {
    id: 'rail-mounted-minigun',
    name: 'Mounted Armored Minigun (Gatling)',
    category: 'Mounted',
    tier: 'S+',
    dps: 680,
    damage: 45,
    fireRate: 900,
    ammoType: '7.62mm',
    magSize: 250,
    description: 'Train-mounted turret with continuous suppressive fire. Requires high ammo reserves.'
  },
  {
    id: 'scoped-carbine-762',
    name: '7.62mm Marksman Rifle',
    category: 'Rifle',
    tier: 'S',
    dps: 310,
    damage: 125,
    fireRate: 150,
    ammoType: '7.62mm',
    magSize: 10,
    description: 'Long-range precision shooter. Essential for picking off Spewers before they reach the train windows.'
  },
  {
    id: 'industrial-flamethrower',
    name: 'Pyro-Sprayer Flamethrower',
    category: 'Special',
    tier: 'S',
    dps: 390,
    damage: 65,
    fireRate: 360,
    ammoType: 'Fuel Tank',
    magSize: 100,
    description: 'Ignites entire zombie waves instantly. Uses train boiler fuel if reloaded at engine.'
  },
  {
    id: 'tactical-smg-9mm',
    name: 'Sub-Machine Gun 9mm',
    category: 'SMG',
    tier: 'A',
    dps: 260,
    damage: 28,
    fireRate: 550,
    ammoType: '9mm',
    magSize: 30,
    description: 'Lightweight sidearm for rapid train platform defense. Low recoil and cheap ammo crafting.'
  },
  {
    id: 'heavy-sledgehammer',
    name: 'Titanium Sledgehammer',
    category: 'Melee',
    tier: 'A',
    dps: 190,
    damage: 140,
    fireRate: 80,
    ammoType: 'Melee',
    magSize: 1,
    description: 'Zero ammunition cost. Knocks back Walkers and breaks barricades with heavy charge swings.'
  }
];

export const TRAIN_UPGRADES: TrainUpgrade[] = [
  {
    id: 'boiler-engine-mk4',
    name: 'Supercharged Turbodiesel Engine Mk.4',
    category: 'Engine',
    tierLevel: 4,
    costScrap: 2500,
    effect: '+45% Max Top Speed, -20% Fuel Consumption Rate',
    speedModifierPercent: 45,
    weightAddTons: 2.5,
    recommendation: 'Must Have'
  },
  {
    id: 'spiked-armor-plating',
    name: 'Spiked Steel Cowcatcher & Plating',
    category: 'Armor',
    tierLevel: 3,
    costScrap: 1800,
    effect: 'Absorbs 80% impact collision damage from horde blockades. Rams zombies without speed drop.',
    speedModifierPercent: -5,
    weightAddTons: 4.0,
    recommendation: 'High ROI'
  },
  {
    id: 'dual-mounted-turret-roof',
    name: 'Dual Roof Turret Mounts',
    category: 'Weaponry',
    tierLevel: 2,
    costScrap: 1200,
    effect: 'Allows mounting 2 player-controlled or auto-turrets on train roof.',
    speedModifierPercent: 0,
    weightAddTons: 1.2,
    recommendation: 'Must Have'
  },
  {
    id: 'coal-bunker-expanded',
    name: 'High-Capacity Coal Bunker & Tank',
    category: 'Utility',
    tierLevel: 2,
    costScrap: 900,
    effect: 'Doubles train fuel capacity from 500 units to 1,000 units.',
    speedModifierPercent: -2,
    weightAddTons: 1.5,
    recommendation: 'High ROI'
  }
];

export const ZOMBIE_ENTITIES: ZombieEntity[] = [
  {
    id: 'armored-charger-tank',
    name: 'Armored Charger (Ironhide)',
    threatLevel: 'Class S',
    hp: 1200,
    speed: 'Fast Run',
    danger: 'Breaches train doors, rams cowcatcher causing derailment hazard.',
    weakness: 'Exposed neck joint & 12 Gauge Shotgun point-blank blasts.',
    counterTactics: 'Deploy EMP Shock Traps on tracks or concentrate Mounted Minigun fire.'
  },
  {
    id: 'toxic-spewer',
    name: 'Toxic Acid Spewer',
    threatLevel: 'Class A',
    hp: 450,
    speed: 'Medium Walk',
    danger: 'Lobs acid clouds into train cabin, melting engine boilers and players.',
    weakness: 'Headshots with 7.62mm Marksman Rifle.',
    counterTactics: 'Eliminate from distance before train reaches 30m proximity.'
  },
  {
    id: 'night-stalker-leaper',
    name: 'Night Stalker Leaper',
    threatLevel: 'Class A',
    hp: 380,
    speed: 'Ultra Fast',
    danger: 'Leaps directly onto train roof during tunnels or darkness phases.',
    weakness: 'Pyro Flamethrower & Roof Searchlights.',
    counterTactics: 'Turn on Train Floodlights to blind and stun for 3 seconds.'
  },
  {
    id: 'feral-walker-horde',
    name: 'Feral Horde Walker',
    threatLevel: 'Class C',
    hp: 120,
    speed: 'Slow Shuffle',
    danger: 'Overwhelms by sheer volume if train slows down near barricades.',
    weakness: 'Collisions with Cowcatcher & Explosive Barrels.',
    counterTactics: 'Maintain train speed above 40 km/h to crush without stopping.'
  }
];

export const ROUTE_STATIONS: RouteStation[] = [
  {
    name: 'Outpost 1: Ironbound Depot',
    distanceFromStartKm: 0,
    dangerRating: 'Low',
    fuelDropChance: '100% Guaranteed',
    keyLoot: 'Starter Scrap, Basic Coal, 9mm Ammo',
    outpostNotes: 'Safe zone starter hub with Workbench repair stations.'
  },
  {
    name: 'Outpost 4: Frostline Ravine',
    distanceFromStartKm: 45,
    dangerRating: 'Moderate',
    fuelDropChance: '75%',
    keyLoot: 'High-Density Fuel Drums, 12 Gauge Crate, Engine Components',
    outpostNotes: 'Sub-zero temperatures reduce boiler efficiency by 15%.'
  },
  {
    name: 'Outpost 8: Desolation Yard',
    distanceFromStartKm: 120,
    dangerRating: 'High',
    fuelDropChance: '50%',
    keyLoot: 'Turbodiesel Blueprints, Titanium Sledgehammer, Mounted Gatling Ammo',
    outpostNotes: 'Heavy Night Stalker presence. Requires Roof Searchlights.'
  },
  {
    name: 'Outpost 10: Terminal Citadel',
    distanceFromStartKm: 250,
    dangerRating: 'EXTREME',
    fuelDropChance: '25%',
    keyLoot: 'Class S Scrip Chest, Golden Turbine, Endgame Trophy',
    outpostNotes: 'Final extraction station. Boss waves spawn continuously until train departs.'
  }
];

export const CARGO_ITEMS: CargoItem[] = [
  {
    id: 'refined-iron-ingot',
    name: 'Refined Iron Ingot Crate',
    category: 'Metals',
    baseScrapValue: 150,
    weightKg: 25,
    rarity: 'Common',
    bestOutpostToSell: 'Outpost 4: Frostline Ravine',
    bonusMultiplier: 1.25
  },
  {
    id: 'battery-core-high-cap',
    name: 'High-Capacity Lithium Battery Core',
    category: 'Electronics',
    baseScrapValue: 450,
    weightKg: 10,
    rarity: 'Rare',
    bestOutpostToSell: 'Outpost 8: Desolation Yard',
    bonusMultiplier: 1.6
  },
  {
    id: 'high-octane-fuel-canister',
    name: 'High-Octane Diesel Canister',
    category: 'Fuel/Chemicals',
    baseScrapValue: 300,
    weightKg: 15,
    rarity: 'Rare',
    bestOutpostToSell: 'Outpost 10: Terminal Citadel',
    bonusMultiplier: 2.0
  },
  {
    id: 'golden-turbine-core',
    name: 'Pre-War Golden Turbine Relic',
    category: 'Relic',
    baseScrapValue: 1500,
    weightKg: 40,
    rarity: 'Legendary',
    bestOutpostToSell: 'Outpost 10: Terminal Citadel',
    bonusMultiplier: 2.5
  }
];

export const CLASS_ROLES: ClassRole[] = [
  {
    id: 'boiler-engineer',
    name: 'Train Engineer / Stoker',
    roleType: 'Boiler/Engineer',
    keyAbility: 'Overcharge Pressure Valve (+30% train speed for 15s)',
    passiveBonus: '-20% Boiler Fuel Drain & +50% Repair Hammer speed',
    recommendedWeapons: ['Trench Auto-Shotgun Mk.II', 'Pyro-Sprayer Flamethrower'],
    playstyle: 'Manages engine temperature, keeps boiler stoked, repairs door breaches.'
  },
  {
    id: 'heavy-gunner',
    name: 'Mounted Turret Specialist',
    roleType: 'Gunner/Heavy',
    keyAbility: 'Suppressive Overdrive (-50% mounted minigun overheating)',
    passiveBonus: '+25% Mounted Weapon Damage & +150 Max Ammo Carry',
    recommendedWeapons: ['Mounted Armored Minigun', '7.62mm Marksman Rifle'],
    playstyle: 'Mans train roof Gatling guns, eliminates Armored Chargers and airborne leapers.'
  },
  {
    id: 'scout-looter',
    name: 'Scavenger & Runner',
    roleType: 'Scout/Looter',
    keyAbility: 'Sprint Emergency Dash (3x sprint speed for 5s)',
    passiveBonus: '+40kg Cargo Carry Weight & 2x Search Speed at Outposts',
    recommendedWeapons: ['Sub-Machine Gun 9mm', 'Titanium Sledgehammer'],
    playstyle: 'Disembarks at outposts, loots scrap chests, brings fuel drums back to train.'
  }
];
