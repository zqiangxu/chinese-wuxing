import { directory } from './directory';

const DEFAULT_WUXING = '未';

export function getChineseWuxing(name: string): string[] {
  const wuxing = [];
  for (let i = 0; i < name.length; i++) {
    wuxing.push(directory[name[i]] || DEFAULT_WUXING);
  }
  return wuxing;
}
