// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// Example 3:

// Input: intervals = [[4,7],[1,4]]
// Output: [[1,7]]
// Explanation: Intervals [1,4] and [4,7] are considered overlapping.


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  var b = intervals.sort((a,b) => a[0] - b[0] )
  console.log(b);
  
};

var merge = function(intervals) {
    if (intervals.length === 0) return [];
    
    // Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const last = result[result.length - 1];
        
        // Check if current interval overlaps with last merged interval
        if (last[1] >= intervals[i][0]) {
            // Merge: extend end time to maximum
            last[1] = Math.max(last[1], intervals[i][1]);
        } else {
            // No overlap: add new interval
            result.push(intervals[i]);
        }
    }
    
    return result;
};

const ans = merge([[1,3],[2,6],[8,10],[15,18]])