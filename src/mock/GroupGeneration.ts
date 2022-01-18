import { randomId } from '@/helpers'
import { Child } from '@/types'

export const groupGeneration = (
  { includeTitles } = { includeTitles: true }
) : Child | any => {
  const amount = 4
  const arr = []
  for (let i = 0; i < amount; i++) {
    const Child = includeTitles
      ? {
          title: randomId(),
          text: randomId(),
          links: [
            {
              href: '#',
              text: randomId()
            },
            {
              href: '#',
              text: randomId()
            },
            {
              href: '#',
              text: randomId()
            },
            {
              href: '#',
              text: randomId()
            }
          ]
        }
      : {
          href: '#',
          text: randomId()
        }
    arr.push(Child)
  }
  return arr
}
