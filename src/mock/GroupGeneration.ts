import { randomId } from "@/helpers"

export const groupGeneration = ({includeTitles} = { includeTitles: true, }) => {
    const amount = 4
    const arr = []
    for (let i = 0; i < amount; i++) {
        const Child = includeTitles ? {
            title: randomId(),
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
                },
            ]
        } : {
            href: '#',
            text: randomId(),
        }
        arr.push(Child)
    }
    return arr
}