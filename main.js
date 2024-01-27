const footerYear = document.querySelector(".footer-year")

const getYear = () => {
	const date = new Date().getFullYear()
	footerYear.textContent = date
}
getYear()

const checkScreenW = () => {
	if (window.innerWidth >= 768) {
		document.getElementById("menu-toggle").checked = false
	}
}
window.addEventListener("resize", checkScreenW)

window.addEventListener("load", checkScreenW)
