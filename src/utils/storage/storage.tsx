export const getStorageValue = (key: string) => {
  const storedValue = localStorage.getItem(key)

  if (!storedValue) {
    return null
  }

  return JSON.parse(storedValue)
}

export const setStorageValue = (value: string, key: string) => {
  if (!value) {
    localStorage.removeItem(key)
  } else {
    const data = JSON.stringify(value)
    localStorage.setItem(key, data)
  }
}

