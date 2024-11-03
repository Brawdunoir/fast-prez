export function parseMediaInfo(input) {
  const sections = {
    general: {},
    video: [],
    audio: [],
    text: [],
    menu: []
  }

  let currentSection = null
  const lines = input.split('\n')

  for (const line of lines) {
    const trimmedLine = line.trim()

    // Handle section headers
    if (trimmedLine === 'General') {
      currentSection = 'general'
      continue
    } else if (trimmedLine.startsWith('Video')) {
      currentSection = 'video'
      sections.video.push({})
      continue
    } else if (trimmedLine.startsWith('Audio')) {
      currentSection = 'audio'
      sections.audio.push({})
      continue
    } else if (trimmedLine.startsWith('Text')) {
      currentSection = 'text'
      sections.text.push({})
      continue
    } else if (trimmedLine === 'Menu') {
      currentSection = 'menu'
      continue
    }

    // Parse key-value pairs
    if (trimmedLine && currentSection) {
      const splitIndex = trimmedLine.indexOf(':')
      if (splitIndex !== -1) {
        const key = trimmedLine.substring(0, splitIndex).trim().toLowerCase().replace(/\s+/g, '_')
        const value = trimmedLine.substring(splitIndex + 1).trim()

        if (currentSection === 'general') {
          sections.general[key] = value
        } else if (['video', 'audio', 'text'].includes(currentSection)) {
          const array = sections[currentSection]
          array[array.length - 1][key] = value
        } else if (currentSection === 'menu') {
          sections.menu.push(value)
        }
      }
    }
  }

  return sections
}
