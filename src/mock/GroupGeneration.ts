import { randomId } from "@/helpers"

export const groupGeneration = () => {
    const amount = 4
    const arr = []
    for (let i = 0; i < amount; i++) {
        const groupItem = {
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
        }
        arr.push(groupItem)
    }
    return arr
}