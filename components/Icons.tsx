import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  LineChart,
  Mail,
  MapPin,
  Menu,
  MousePointerClick,
  Phone,
  Search,
  Share2,
  Sparkles,
  UsersRound,
  Workflow,
  X,
} from "lucide-react";

const icons = {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  LineChart,
  Mail,
  MapPin,
  Menu,
  MousePointerClick,
  Phone,
  Search,
  Share2,
  Sparkles,
  UsersRound,
  Workflow,
  X,
};

export type IconName = keyof typeof icons;

export function Icon({
  name,
  className,
}: {
  name: IconName | string;
  className?: string;
}) {
  const Component = icons[name as IconName] ?? Sparkles;
  return <Component aria-hidden="true" className={className} strokeWidth={1.8} />;
}
