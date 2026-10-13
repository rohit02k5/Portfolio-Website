import {
  Github,
  Linkedin,
  Mail,
  Code2,
  ChefHat,
  Braces,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  leetcode: Code2,
  codechef: ChefHat,
  gfg: Braces,
};

export default function SocialIcon({ icon, size = 18 }: { icon: string; size?: number }) {
  const Icon = map[icon] ?? Mail;
  return <Icon size={size} strokeWidth={1.8} aria-hidden="true" />;
}
