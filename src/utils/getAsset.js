const assetModules = import.meta.glob('../assets/**/*', {
	eager: true,
	import: 'default',
})

const assetMap = Object.fromEntries(
	Object.entries(assetModules).map(([modulePath, url]) => [
		modulePath.replace('../assets/', ''),
		url,
	]),
)

export const getAsset = (path = '') => {
	if (!path) return ''
	if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path

	const normalizedPath = path.replace(/^\/+/, '').replace(/^assets\//, '')
	return assetMap[normalizedPath] || ''
}
