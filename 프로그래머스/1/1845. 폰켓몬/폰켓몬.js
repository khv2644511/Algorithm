function solution(nums) {
    var answer = 0;
    
    let deleteDuplicate = new Set(nums)
    deleteDuplicate = [...deleteDuplicate]
    
    let deleteDuplicateLen = deleteDuplicate.length;
    let halfN = nums.length / 2
    
    answer = deleteDuplicateLen > halfN ? halfN : deleteDuplicateLen
    // console.log('deleteDuplicateLen',deleteDuplicateLen)
    // console.log('halfN',halfN)
    
    return answer;
    
}


// [3,1,2,3] = 4개 / 2 

// [3,1,2] = 3개

// let halfN = Math.floor(nums.length / 2) = 2

// 중복을 제거한 nums2.length >= halfN 라면, 가져갈 수 있느 최대 종류는 halfN
// 중복을 제거한 nums2.length < halfN 라면, 가져갈 수 있느 최대 종류는 num2.length 개임

// [3,3,3,2,2,2] = 6/2 = 3개
// [3,2]