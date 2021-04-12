/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsMap = {};
  domains.forEach((domain) => {
    const parts = domain.split('.').reverse();
    let domainAcc = '';
    parts.forEach((part) => {
      domainAcc += `.${part}`;
      if (domainsMap[domainAcc] === undefined) {
        domainsMap[domainAcc] = 1;
      } else {
        domainsMap[domainAcc]++;
      }
    });
  });
  return domainsMap;
}

module.exports = getDNSStats;
