import type { Skill } from '../data/skills';

interface SkillsCloudProps {
  skills: Skill[];
}

const weightConfig: Record<number, { fontSize: string; fontWeight: number; opacity: number }> = {
  5: { fontSize: '1.35rem', fontWeight: 800, opacity: 1 },
  4: { fontSize: '1.1rem',  fontWeight: 700, opacity: 0.95 },
  3: { fontSize: '0.95rem', fontWeight: 600, opacity: 0.85 },
  2: { fontSize: '0.82rem', fontWeight: 500, opacity: 0.75 },
  1: { fontSize: '0.72rem', fontWeight: 400, opacity: 0.6 },
};

const rotations = [-2, 1, -1, 2, 0, -2, 1, 0, -1, 2];

export default function SkillsCloud({ skills }: SkillsCloudProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.6rem',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem 0',
      }}
    >
      {skills.map((skill, i) => {
        const config = weightConfig[skill.weight] ?? weightConfig[3];
        const rotation = rotations[i % rotations.length];
        return (
          <span
            key={skill.name}
            className="skill-tag"
            style={{
              fontSize: config.fontSize,
              fontWeight: config.fontWeight,
              opacity: config.opacity,
              transform: `rotate(${rotation}deg)`,
              padding: `${0.15 + skill.weight * 0.05}em ${0.5 + skill.weight * 0.1}em`,
            }}
          >
            {skill.name}
          </span>
        );
      })}
    </div>
  );
}
