export default [
  {
    id: 1,
    lvl: 4,
    name: 'Пика',
    img: require('@/assets/img/1.png'),
    desc: `Бандитка - это Легендарная карта, открывающаяся на 13 арене (Убежище разбойников).`,
    alias: 'physiognomy',
    info: [
      { title: 'transition', value: '20s' },
      { title: 'speed', value: '16' },
      { title: 'cost', value: '150' }
    ]
  },
  {
    id: 2,
    lvl: 7,
    name: 'Відьма',
    img: require('@/assets/img/2.png'),
    desc: `Лучницы - это Обычная карта, открывающаяся с самого начала игры ещё в Учебном лагере.`,
    alias: 'witch',
    info: [
      { title: 'transition', value: '16s' },
      { title: 'speed', value: '24' },
      { title: 'cost', value: '180' }
    ]
  },
  {
    id: 3,
    lvl: 8,
    name: 'Дракон',
    desc: `Дракончик - это Эпическая карта, открывающаяся на 6 арене (Игровой домик П.Е.К.К.А.).`,
    img: require('@/assets/img/3.png'),
    alias: 'dragon',
    info: [
      { title: 'transition', value: '18s' },
      { title: 'speed', value: '18' },
      { title: 'cost', value: '200' }
    ]
  }
]
