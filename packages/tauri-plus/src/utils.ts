import type { TauriPluginOptions, TauriOptionConfig } from './plugin'

export const getTauriArgs = (options: TauriPluginOptions, optionsToCheck: TauriOptionConfig) => {
    const args: string[] = []

    for (const key in optionsToCheck) {
        if (options[key]) {
            const option = options[key]
            const config = optionsToCheck[key]

            if (config.type !== Boolean) {
                let value = option as string
                if (config.type === Array && Array.isArray(option)) {
                    value = option.join(',')
                }
                args.push(`--${config.name || key}`)
                args.push(`${value}`)
            } else if (config.type === Boolean && !!option) {
                args.push(`--${config.name || key}`)
            }

        }
    }
    return args
}