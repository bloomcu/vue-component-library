// interface IObjectKeys {
//     [key: string]: string | number | any;
// }
let components: any = {}
// run once
if (!Object.keys(components).length) {
    const gatherComponents = require.context('./', true, /.vue$/)
    gatherComponents.keys().map(x => gatherComponents(x))
    const allComponents = gatherComponents.keys().map(x => gatherComponents(x))
    allComponents.forEach((component) => {
        if (!component.default) return
        const slashArray = component.default.__file.split('/')
        const nameResolver = slashArray[slashArray.length - 1].replace('.vue', '')
        const componentName = component.name || nameResolver
        components[componentName] = component.default
    })
}
export default function useComponents() {
    const gatherComponents = require.context('./', true, /.vue$/)
    // console.log(`gatherComponents`, gatherComponents.keys())
    gatherComponents.keys().map(x => gatherComponents(x))
    const allComponents = gatherComponents.keys().map(x => gatherComponents(x))
    // console.log(`allComponents`, allComponents)
    return {
        components,
        getComponents(componentNames: string[]) {
            const obj : any = {}
            const wantedComponents = allComponents.filter((component) => {
                if (!component.default) return
                const slashArray = component.default.__file.split('/')
                const nameResolver = slashArray[slashArray.length - 1].replace('.vue', '')
                const componentName = component.name || nameResolver
                const foundOne = componentNames.map((z) => z.toString().toLowerCase()).find((j) => j.toString().toLowerCase() === componentName)
                if (foundOne) {
                    console.log(`f`,foundOne )
                }
                const fetchComponent = componentNames.find((cn) => {
                    const doesEqual = cn.toLowerCase() === componentName.toLowerCase()
                    if (doesEqual) {
                        return cn
                    }
                })
                if (fetchComponent) return component
            })
            wantedComponents.forEach((component) => {
                const slashArray = component.default.__file.split('/')
                const nameResolver = slashArray[slashArray.length - 1].replace('.vue', '')
                const componentName = component.name || nameResolver
                obj[componentName] = component.default
            })
            return obj
        }
    }
}

