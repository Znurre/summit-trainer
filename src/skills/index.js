import { Swords, Shield, Zap, Flame, Droplet, Wind, Brain, Heart, Eye } from 'lucide-react';
import awakened from './classes/awakened.js';

// ===================== CONFIGURATION =====================
export const TOTAL_POINTS = 24;
export const MAX_TREE_POINTS = 6;
export const MAX_SKILL_LEVEL = 3;

// Icon mapping for skills without custom assets
export const FALLBACK_ICONS = {
    'awakened': {
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
    },
};

export const CONFIG = {
    awakened,
};
