<script setup lang="ts">
  import { watch, ref } from 'vue';
  import { Typography, Row, Col, Input, Button, Switch } from 'ant-design-vue';
  import { isPrime, isPrimeEfficent } from '../helpers/checkIsPrimeNumber';

  // variables
  const isEfficient = ref<boolean>(true);
  const value = ref('');
  const history = ref([]);
  const examples = [
    "Is 2 a prime number? Yes, 2 is a prime number because it only has two factors, 1 and 2.",
    "Is 17 a prime number? Yes, 17 is a prime number because it only has two factors, 1 and 17.",
    "Is 51 a prime number? No, 51 is NOT a prime number because it has more than two factors. 51 is a composite number and can be factored by any of the following numbers: 1, 3, 17, 51."
  ];

  // watch(value, () => {
  //   console.log(value.value);
  // });
</script>

<template>
  <div class="prime-number-wrapper">
    <Row>
      <Col :span="24" class="calculator">
        <Row class="title">
          <Col :span="24">
            <Typography.Title :level="3">Prime Number Calculator</Typography.Title>
          </Col>
        </Row>
        <Row>
          <Col :span="24">
            <Typography.Title :level="4">What is a prime number?</Typography.Title>
          </Col>
          <Col :span="24" class="whatisdescription">
            <Typography.Paragraph>
              A prime number is any integer, or whole number, greater than 1 that is only divisible by 1 and itself.
              In other words, a prime number only has two factors, 1 and itself.
            </Typography.Paragraph>
          </Col>
        </Row>
        <Row
          align="middle"
          class="inputArea"
          :gutter="[0, 8]"
        >
          <Col :span="12" class="alignLeft">Enter a positive integer:</Col>
          <Col :span="12">
            <Input v-model:value="value" placeholder="e.g. 11" />
          </Col>
          <Col :span="3" class="alignLeft">
            <Switch v-model:checked="isEfficient" />
          </Col>
          <Col :span="21" class="alignLeft">
            <span>{{ isEfficient ? "Efficient calculaction" : "Naive approach" }}</span>
          </Col>
        </Row>
        <Row
          :gutter="[5, 0]"
          class="actions"
        >
          <Col :span="12">
            <Button block>Clear</Button>
          </Col>
          <Col :span="12">
            <Button type="primary" block v-on:click="history.push(isEfficient ? isPrimeEfficent(value) : isPrime(value))">Calculate</Button>
          </Col>
        </Row>
        <Row>
          <Col :span="24">
            <Typography.Title :level="4">Calculations</Typography.Title>
          </Col>
          <Col :span="24" class="alignLeft">
            <ul>
              <li v-if="!history?.length">There are no calculations in place</li>
              <li v-for="item in history">
                [{{ item.approach }}] {{ item.message }}
                <ul>
                  <li>Executed in {{ item.duration.toFixed(3) }}ms</li>
                  <li>Factors: {{ item?.factors || "Not computed" }}</li>
                </ul>
              </li>
            </ul>
          </Col>
          <Col :span="24">
            <Typography.Title :level="4">Examples</Typography.Title>
          </Col>
          <Col :span="24" class="alignLeft">
            <ul>
              <li v-for="example in examples">
                {{ example }}
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
</template>

<style scoped>
  .prime-number-wrapper {
    color: #3d3d3d;
    border: 1px dashed #f2f2f2;
    max-width: 600px;
  }
  .calculator {
    width: 100%;
    height: 100%;
    background-color: #fdfdfd;
    padding: 20px;

    .title {
      background-color: #f2f2f2;
      margin-bottom: 0px;
      padding-bottom: 10px;
    }
    .whatisdescription {
      padding: 0px 40px 20px 40px;
      border-bottom: 0px solid #f2f2f2;
    }
    .inputArea {
      padding: 20px 0px;
      margin-bottom: 20px;
    }
    .actions {
        border-bottom: 1px solid #f2f2f2;
        padding: 0px 0px 20px 0px;
      }
  }
  .information {
    width: 100%;
    height: 100%;
    background-color: #fdfdfd;
    border-left: 1px solid #f3f3f3;
  }
  .alignLeft {
    text-align: left;
  }

</style>