import { randomId } from "@/helpers"

export const groupGeneration = ({includeTitles} = { includeTitles: true, }) => {
    const amount = 4
    const arr = []
    for (let i = 0; i < amount; i++) {
        const groupItem = includeTitles ? {
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
        arr.push(groupItem)
    }
    return arr
}