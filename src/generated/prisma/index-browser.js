
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.OrganisationScalarFieldEnum = {
  orgId: 'orgId',
  type: 'type'
};

exports.Prisma.UserCategoryLinkUpScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  userName: 'userName',
  categoryId: 'categoryId',
  createdAt: 'createdAt'
};

exports.Prisma.UserLeavesScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  sickLeaves: 'sickLeaves',
  vacationLeaves: 'vacationLeaves',
  parentalLeaves: 'parentalLeaves',
  maternityLeaves: 'maternityLeaves',
  createdAt: 'createdAt'
};

exports.Prisma.UserHolidayScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  holidayId: 'holidayId',
  createdAt: 'createdAt'
};

exports.Prisma.UserCategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  optionalHolidays: 'optionalHolidays'
};

exports.Prisma.HolidayScalarFieldEnum = {
  id: 'id',
  name: 'name',
  date: 'date',
  type: 'type',
  createdAt: 'createdAt'
};

exports.Prisma.LeavePolicyScalarFieldEnum = {
  id: 'id',
  categoryId: 'categoryId',
  sickLeaves: 'sickLeaves',
  vacationLeaves: 'vacationLeaves',
  parentalLeaves: 'parentalLeaves',
  maternityLeaves: 'maternityLeaves',
  createdAt: 'createdAt'
};

exports.Prisma.LeaveScalarFieldEnum = {
  id: 'id',
  type: 'type',
  userId: 'userId',
  message: 'message',
  effectiveDays: 'effectiveDays',
  startDate: 'startDate',
  endDate: 'endDate',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.UserScheduleScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  workingDay: 'workingDay',
  startTime: 'startTime',
  endTime: 'endTime',
  createdAt: 'createdAt'
};

exports.Prisma.TimeEntryScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  date: 'date',
  loginTime: 'loginTime',
  logoutTime: 'logoutTime',
  createdAt: 'createdAt'
};

exports.Prisma.BreakScalarFieldEnum = {
  id: 'id',
  timeEntryId: 'timeEntryId',
  breakStart: 'breakStart',
  breakEnd: 'breakEnd'
};

exports.Prisma.UserStreakScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  currentStreak: 'currentStreak',
  lastLoginDate: 'lastLoginDate',
  updatedAt: 'updatedAt'
};

exports.Prisma.NqlFunctionMappingScalarFieldEnum = {
  id: 'id',
  nlq: 'nlq',
  function: 'function',
  input: 'input',
  cases: 'cases'
};

exports.Prisma.NlqSqlMappingScalarFieldEnum = {
  id: 'id',
  nlq: 'nlq',
  sql: 'sql',
  cases: 'cases'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.organisationType = exports.$Enums.organisationType = {
  GOOD: 'GOOD',
  EVIL: 'EVIL'
};

exports.HolidayType = exports.$Enums.HolidayType = {
  OPTIONAL: 'OPTIONAL',
  MANDATORY: 'MANDATORY'
};

exports.LeaveType = exports.$Enums.LeaveType = {
  SICK: 'SICK',
  VACATION: 'VACATION',
  PARENTAL: 'PARENTAL',
  MATERNITY: 'MATERNITY'
};

exports.LeaveStatus = exports.$Enums.LeaveStatus = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

exports.Prisma.ModelName = {
  organisation: 'organisation',
  UserCategoryLinkUp: 'UserCategoryLinkUp',
  UserLeaves: 'UserLeaves',
  UserHoliday: 'UserHoliday',
  UserCategory: 'UserCategory',
  Holiday: 'Holiday',
  LeavePolicy: 'LeavePolicy',
  Leave: 'Leave',
  UserSchedule: 'UserSchedule',
  TimeEntry: 'TimeEntry',
  Break: 'Break',
  UserStreak: 'UserStreak',
  NqlFunctionMapping: 'NqlFunctionMapping',
  NlqSqlMapping: 'NlqSqlMapping'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
