class quicklyready {
    ready(arr, low = 0, high = null) {
        if (high === null) high = arr.length - 1;
        if (low < high) {
            let p = this.partion(arr, low, high);
            this.ready(arr, low, p - 1);
            this.ready(arr, p + 1, high);
        }
        return arr;
    }
    partion(arr, l, r) {
        let pivot = l;
        while (l < r) {
            if (arr[l] <= arr[pivot]) {
                l++;
            }
            if (arr[r] > arr[pivot]) {
                r--;
            }
            if (l < r && arr[l] > arr[pivot] && arr[r] <= arr[pivot]) {
                this.swap(arr, l, r);
                l++;
                r--;
            }
        }
        this.swap(arr, pivot, r);
        return r;
    }
    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        return arr;
    }
}

const q = new quicklyready();
console.log(q.ready([10, 80, 30, 90, 40, 50, 70]));