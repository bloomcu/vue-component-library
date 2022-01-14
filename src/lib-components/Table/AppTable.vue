<template>
  <table
    class="table table--expanded@xs position-relative z-index-1 width-100% text-unit-em text-sm js-table"
    aria-label="Table Example"
  >
    <thead class="table__header">
      <tr class="table__row">
        <th
          v-for="(row, i) in rows"
          :key="row.uuid"
          class="table__cell"
          :class="i === rows.length - 1 ? 'text-right' : 'text-left'"
          scope="col"
        >{{ row.display }}</th>
      </tr>
    </thead>

    <tbody class="table__body">
      <tr class="table__row" v-for="(column, i) in columns" :key="i">
        <td
          v-for="x in rows.length"
          :key="x"
          class="table__cell"
          role="cell"
          :class="{
            'text-right': x - 1 === rows.length - 1
          }"
        >
          <span class="table__label" aria-hidden="true">{{ rows[x - 1].display }}:</span>
          {{ column[rows[x - 1].key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>


<script lang="ts">
import { randomId } from "@/helpers";
import { defineComponent, onMounted, PropType } from "@vue/composition-api";
import casual from 'casual-browserify'
import TableScript from "./script";
interface TableRow {
  uuid: string
  display: string
  key: string
}
export default defineComponent({
  props: {
    rows: {
      type: Array as PropType<TableRow[]>,
      default: () => ([
        {
          uuid: randomId(),
          display: 'Name',
          key: 'name',
        },
        {
          uuid: randomId(),
          display: 'Job',
          key: 'job',
        },
        {
          uuid: randomId(),
          display: 'Company',
          key: 'company',
        },
        {
          uuid: randomId(),
          display: 'Salary',
          key: 'salary',
        },
      ])
    },
    columns: {
      type: Array as PropType<any[]>,
      default: () => (
        [
          {
            name: casual.name,
            job: casual.company_name,
            company: casual.company_name,
            salary: `$${casual.integer(40000, 500000)}`
          },
          {
            name: casual.name,
            job: casual.company_name,
            company: casual.company_name,
            salary: `$${casual.integer(40000, 500000)}`
          },
          {
            name: casual.name,
            job: casual.company_name,
            company: casual.company_name,
            salary: `$${casual.integer(40000, 500000)}`
          },
        ]
      )
    }
  },
  setup() {
    onMounted(() => {
      TableScript()
    })
  }
})

</script>


<style lang="scss">
@use '@/styles/base' as *;

/* -------------------------------- 

File#: _1_table
Title: Table
Descr: Data tables used to organize and display information in rows and columns
Usage: codyhouse.co/license

-------------------------------- */

// >>> style affecting all (block + expanded) versions 👇
.table {
  position: relative;
  z-index: 1;
}
// <<< end style affecting all versions

// >>> block version only (mobile) 👇
.table:not(.table--expanded) {
  border-collapse: separate;
  border-spacing: 0 var(--space-md); // row gap
  margin-top: calc(-2 * var(--space-md)); // set spacing variable = row gap ☝️

  .table__header {
    // hide table header - but keep it accessible to SR
    @include srHide;
  }

  .table__row {
    .table__cell:first-child {
      border-radius: var(--radius-md) var(--radius-md) 0 0;
    }

    .table__cell:last-child {
      border-radius: 0 0 var(--radius-md) var(--radius-md);

      &::after {
        // hide border bottom
        display: none;
      }
    }
  }

  .table__cell {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: right;
    padding: var(--space-md);
    background-color: var(--color-bg-light);

    &::after {
      // border bottom
      content: "";
      position: absolute;
      bottom: 0;
      left: var(--space-md);
      width: calc(100% - (2 * var(--space-md)));
      height: 1px;
      background-color: var(--color-contrast-lower);
    }
  }

  .table__label {
    // inline labels -> visible when table header is hidden
    font-weight: bold;
    text-align: left;
    color: var(--color-contrast-higher);
    margin-right: var(--space-md);
  }
}
// <<< end block version

// >>> expanded version only (desktop) 👇 -> show standard rows and cols
.table--expanded {
  border-bottom: 1px solid var(--color-contrast-lower); // table border bottom

  .table__header {
    .table__cell {
      // header cell style
      position: relative;
      z-index: 10;
      background-color: var(--color-bg);
      border-bottom: 1px solid var(--color-contrast-lower); // header border bottom
      font-weight: bold;
      color: var(--color-contrast-higher);
    }
  }

  .table__body {
    .table__row {
      &:nth-child(odd) {
        background-color: alpha(var(--color-bg-dark), 0.85);
      }
    }
  }

  .table__cell {
    padding: var(--space-sm);
  }

  .table__label {
    // hide inline labels
    display: none;
  }

  // --header-sticky
  .table__header--sticky {
    .table__cell {
      // header cell style
      position: sticky;
      top: 0;
    }
  }
}
// <<< end expanded version

.js {
  .table {
    opacity: 0; // hide table while it is initialized in JS
  }

  .table--loaded {
    opacity: 1;
  }
}

// detect when the table needs to switch from the mobile layout to an expanded one - used in JS
[class*="table--expanded"]::before {
  display: none;
}

@each $breakpoint, $value in $breakpoints {
  .table--expanded\@#{$breakpoint}::before {
    content: "collapsed";
    @include breakpoint(#{$breakpoint}) {
      content: "expanded";
    }
  }
}
</style>