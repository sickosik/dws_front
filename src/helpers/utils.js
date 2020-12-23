export const formatNumber = number => {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(number);
}