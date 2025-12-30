import { services } from '@/data/services';
import ServiceCategorySection from '@/components/services/ServiceCategorySection';
import styles from './page.module.css';

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      {services
        .sort((a, b) => a.order - b.order)
        .map((category) => (
          <ServiceCategorySection key={category.id} category={category} />
        ))}
    </main>
  );
}
