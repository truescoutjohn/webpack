import { createLogger } from '../logger';

it('Error message should be equal', () => {
  const logger = createLogger('error logger');
  logger.error('error message');

  expect(logger.getLogs()).toEqual(['error - error logger - error message']);
});

it('Log message should be equal', () => {
  const logger = createLogger('log logger');
  logger.error('log message');

  expect(logger.getLogs()).toEqual(['error - log logger - log message']);
});
