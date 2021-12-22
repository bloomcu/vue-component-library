type fn = (...args: any[]) => any;


export default function (el: HTMLElement | any, handler: fn) {
    if (!window) return
    const ignoreClickOnMeElement = el
    document.addEventListener('click', function (event: any) {
        var isClickInsideElement = ignoreClickOnMeElement?.contains(event.target);
        if (!isClickInsideElement) {
            handler(true)
            //Do something click is outside specified element
        } else {
            handler(false)
        }
    });

}