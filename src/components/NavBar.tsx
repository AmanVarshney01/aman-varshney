export function NavBar (props: {currentPath: string}) {
    return (
        <nav class="flex flex-row gap-8">
            <a class={`${props.currentPath == '' ? 'underline' : 'no-underline'}`} href="/">Home</a>
            <a class={`${props.currentPath == 'about' ? 'underline' : 'no-underline'}`} href="/about">About</a>
            <a class={`${props.currentPath == 'blog' ? 'underline' : 'no-underline'}`} href="/blog">Blog</a>
        </nav>
    )
}