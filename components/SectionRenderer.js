import Hero from './sections/Hero';
import TextSection from './sections/TextSection';
import FeaturesSection from './sections/FeaturesSection';
import CTASection from './sections/CTASection';

/**
 * SectionRenderer
 *
 * Diese Komponente entscheidet anhand des Abschnittstyps, welche
 * konkrete Komponentenimplementierung verwendet wird. Sie reicht die
 * benötigten Props und Events durch.
 */
export default function SectionRenderer({ section, onSelect, isSelected, onRemove }) {
  const commonProps = {
    onSelect,
    isSelected,
    onRemove,
  };

  switch (section.type) {
    case 'hero':
      return <Hero {...section.props} {...commonProps} />;
    case 'text':
      return <TextSection {...section.props} {...commonProps} />;
    case 'features':
      return <FeaturesSection {...section.props} {...commonProps} />;
    case 'cta':
      return <CTASection {...section.props} {...commonProps} />;
    default:
      return null;
  }
}