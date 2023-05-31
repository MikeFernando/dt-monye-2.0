export function formatterPrice(price: number) {
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(price)
}

export function formatterDate(date: Date) {
    return new Intl.DateTimeFormat('pt-br').format(new Date(date))
}