function search(arr,target,start,end){
    start = start || 0;
    end = end || arr.length - 1;
    if(start > end){
       return -1;
    }
   let mid = Math.floor((start + end)/2);
       if(arr[mid] > target) {
           end = mid-1;
           return search(arr,target,start,end);
       }
       else if(arr[mid] < target){
           start = mid + 1;
           return search(arr,target,start,end);
       }
       else {
           return arr[mid];
       }
}

describe('binary search test', function () {
    it('查到', function (done) {
        let a = [1, 2, 3, 4, 5, 6, 7];
        let result = search(a,3);
        expect(result).toEqual(3);
        done();
    });
});
describe('binary search test', function () {
    it('查不到', function (done) {
        let a = [1, 2, 4, 5, 6, 7];
        let result = search(a,3);
        expect(result).toEqual(-1);
        done();
    });
});