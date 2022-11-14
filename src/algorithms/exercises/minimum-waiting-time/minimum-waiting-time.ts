/*

  You're given a non-empty array of positive integers representing the amounts
  of time that specific queries take to execute. Only one query can be executed
  at a time, but the queries can be executed in any order.

  A query's waiting time is defined as the amount of time that it must
  wait before its execution starts. In other words, if a query is executed
  second, then its waiting time is the duration of the first query; if a query
  is executed third, then its waiting time is the sum of the durations of the
  first two queries.

  You're allowed to mutate the input array.

*/

export default function minimumWaitingTime(queries: number[]): number {
  const sorted = queries.sort((a, b) => a - b)

  let totalWaitingTime = 0

  for (let i = 0; i < sorted.length; i++) {
    const currentDuration = sorted[i]
    const queriesLeft = sorted.length - 1 - i
    totalWaitingTime += currentDuration * queriesLeft
  }

  return totalWaitingTime
}
