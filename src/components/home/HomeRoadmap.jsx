'use client';
import { useT } from '@/hooks/useT';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  CreditCard,
  Globe2,
  GraduationCap,
  Smartphone,
  ShieldPlus,
  Activity,
  Car,
  Building2,
  Atom,
} from 'lucide-react';
import styles from '@/style/home/HomeRoadmap.module.css';

const iconMap = {
  identity: ShieldCheck,
  payment: CreditCard,
  remittance: Globe2,
  education: GraduationCap,
  lifestyle: Smartphone,
  insurance: ShieldPlus,
  healthcare: Activity,
  mobility: Car,
  public: Building2,
  quantum: Atom,
};

export default function HomeRoadmap() {
  const t = useT('HomeRoadmap');

  const roadmapList = Array.isArray(t('list')) ? t('list') : [];

  return (
    <section className={styles.roadmapSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('title')}</h2>
        <p className={styles.desc}>
          {t('description[0]')} {''}
          <span className={styles.space}>{t('description[1]')}</span>
        </p>

        <div className={styles.iconGrid}>
          {roadmapList.map((item, i) => {
            const Icon = iconMap[item.key] || ShieldCheck;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.04 }}
                className={`${styles.iconItem} ${item.active ? styles.active : styles.inactive}`}
              >
                <motion.div
                  animate={{
                    scale: item.active ? [1, 1.08, 1] : 1,
                    opacity: item.active ? 1 : 0.6,
                  }}
                  transition={{
                    repeat: item.active ? Infinity : 0,
                    repeatDelay: 2,
                    duration: 1.2,
                  }}
                >
                  <Icon size={44} strokeWidth={1.6} />
                  <p className={styles.iconLabel}>{item.label}</p>
                </motion.div>
                <p className={styles.iconDesc}>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
