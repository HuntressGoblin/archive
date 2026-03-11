import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const CustomFooter: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear()

    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>© 2023 - {year} Headhuntress. All original content on this site is the property of the author unless otherwise noted.</p>
        <ul>
          <li>
            <a href="https://archive.goblindnd.com/" target="_blank" rel="noopener noreferrer">
              Another placeholder. 
            </a>
          </li>
        </ul>
      </footer>
    )
  }

  return CustomFooter
}) satisfies QuartzComponentConstructor