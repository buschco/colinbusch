const colors = [
  {
    // Flug
    white: '#FEFCFD',
    black: '#000505',
    grey: '#59656F',
    inactive: '#3B3355',
    active: '#BFCDE0',
    lang: '#3454D1',
    tech: '#34D1BF',
    tool: '#AEADF0',
  },
  {
    // Gebirge
    white: '#FEFCFD',
    black: '#4B3B40',
    grey: '#76ADE2',
    inactive: '#457EAC',
    active: '#F6F5AE',
    lang: '#BD9391',
    tech: '#D4CB92',
    tool: '#A9FFCB',
  },
  {
    // Meer
    white: '#FEFCFD',
    black: '#4B3B47',
    grey: '#587593',
    inactive: '#2F4858',
    active: '#55DDE0',
    lang: '#B2CEDE',
    tech: '#F4E04D',
    tool: '#EFBC9B',
  },
];

export default function style(index) {
  return {
    lang: colors[index].lang,
    tech: colors[index].tech,
    tool: colors[index].tool,
    body: {
      backgroundColor: colors[index].white,
      color: colors[index].black,
    },
    i: {
      color: colors[index].inactive,
    },
    a: {
      color: colors[index].inactive,
    },
    active: {
      color: colors[index].active,
    },
    header: {
      backgroundColor: colors[index].grey,
    },
    spacerSmall: {
      backgroundColor: colors[index].grey,
    },
    spacer: {
      backgroundColor: colors[index].grey,
    },
    btn: {
      backgroundColor: colors[index].grey,
      color: colors[index].active,
    },
    link: {
      color: colors[index].active,
    },
  };
}
