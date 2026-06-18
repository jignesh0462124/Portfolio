import {
  Bell,
  Box,
  ChartNoAxesCombined,
  CreditCard,
  Database,
  Diamond,
  FileText,
  Gavel,
  Globe2,
  Handshake,
  Home,
  Layers2,
  Mail,
  Megaphone,
  Merge,
  Palette,
  Phone,
  Play,
  Scissors,
  Server,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  UsersRound
} from "lucide-react";

const iconMap = {
  bell: Bell,
  box: Box,
  card: CreditCard,
  chart: ChartNoAxesCombined,
  database: Database,
  diamond: Diamond,
  docs: Layers2,
  file: FileText,
  gavel: Gavel,
  globe: Globe2,
  hand: Handshake,
  home: Home,
  mail: Mail,
  merge: Merge,
  mic: Megaphone,
  palette: Palette,
  phone: Phone,
  play: Play,
  server: Server,
  settings: Settings2,
  shield: ShieldCheck,
  spark: Sparkles,
  split: Scissors,
  store: ShoppingBag,
  trend: TrendingUp,
  users: UsersRound
};

export type IconName = keyof typeof iconMap;

export function VisualIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name as IconName] ?? Sparkles;
  return <Icon className={className} aria-hidden="true" />;
}
