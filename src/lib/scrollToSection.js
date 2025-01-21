export async function scrollToSection(sectionId) {
  await new Promise(resolve => setTimeout(resolve, 100)) // Give time for DOM update
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
