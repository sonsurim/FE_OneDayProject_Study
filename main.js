const world = () => {
  const guguDanStr = Array.from({ length: 9 })
    .map((_, offset) => offset + 1)
    .flatMap((i) =>
      Array.from({ length: 9 })
        .map((_, offset) => offset + 1)
        .map((j) => [i, j]),
    )
    .map(([i, j]) => `${i} x ${j} = ${i * j}`)
    .join('\n')

  console.log(guguDanStr)
}

world()
