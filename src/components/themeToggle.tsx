import { createEffect, createSignal } from 'solid-js'

function setGiscusTheme(theme: string) {
	var iframe = document.querySelector('.giscus-frame') as HTMLIFrameElement;

	if (iframe) {
		var url = new URL(iframe.getAttribute('src')!);
		url.searchParams.set('theme', theme);
		iframe.setAttribute('src', url.toString());
	}
}

const initializeTheme = () => {
	let theme
	if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme') as 'light' | 'dark'
	} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		theme = 'dark'
	} else {
		theme = 'light'
	}
	return theme
}

const ThemeToggle = (props: { lightImage: string; darkImage: string }) => {
	const [theme, setTheme] = createSignal(initializeTheme())
	const toggleTheme = () => {
		setTheme(theme() === 'light' ? 'dark' : 'light')
	}

	createEffect(() => {
		if (theme() === 'dark') {
			document.documentElement.classList.add('dark')
			setGiscusTheme('noborder_dark');
		} else {
			document.documentElement.classList.remove('dark')
			setGiscusTheme('noborder_light');
		}
		localStorage.setItem('theme', theme())
	}, [theme])

	return (
		<button onClick={toggleTheme}>
			{theme() === 'dark' ? (
				<img class="m-0" src={props.lightImage} alt={'light mode'} width={20} height={20} />
			) : (
				<img class="m-0" src={props.darkImage} alt={'dark mode'} width={20} height={20} />
			)}
		</button>
	)
}

export default ThemeToggle
