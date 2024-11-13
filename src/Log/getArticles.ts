import { GitHubRepoTreeResponse, LogListItem, LogListResponse } from './types'
import { staticConfig } from './enums'

export const getArticles =
  ({ url = staticConfig.githubRepoFileTreeUrl }: { url?: string }) =>
  async (): Promise<LogListResponse> => {
    const response = await fetch(url)
    const data = (await response.json()) as GitHubRepoTreeResponse

    const mdFiles = data.tree.filter((item) => /\.md$/.test(item.path))

    const mdFileNames = mdFiles.map<LogListItem>(({ path, url }) => ({
      path,
      url,
    }))
    return { articles: mdFileNames }
  }
