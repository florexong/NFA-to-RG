// @ts-check

/// <reference path="../../adapter.js" />
/// <reference path="../primitives/subtitle.js" />
/// <reference path="../primitives/nav-tab-frame.js" />
/// <reference path="../primitives/not-converted-message.js" />
/// <reference path="../complexes/result-area-dfa.js" />
/// <reference path="../complexes/result-area-test.js" />
/// <reference path="../complexes/result-area-automaton-table.js" />

/**
 * The components for input section of the page.
 * Testing and conversion results.
 * @public
 */
class SectionResult {
  
  /* template */
  template = `
    <div class="container-xl pt-3 pt-xl-5">
      <sub-title :title="title"></sub-title>
      <div class="row pt-2">
        <div class="col">
          <nav-tab-frame :items="items">
            <template #tab-string-test>
              <result-area-test v-if="adapter.isConverted()" :adapter="adapter"></result-area-test>
              <converted-message v-else></converted-message>
            </template>
            <template #tab-original-input>
              <automaton-table v-if="adapter.isConverted()" :adapter="adapter" 
              title="Original NFA-ε" :automatonType="adapter.AutomatonType.NFAe"></automaton-table>
              <converted-message v-else></converted-message>
            </template>
            <template #tab-nfa-conversion>
              <automaton-table v-if="adapter.isConverted()" :adapter="adapter" 
              title="Converted to NFA" :automatonType="adapter.AutomatonType.NFA"></automaton-table>
              <converted-message v-else></converted-message>
            </template>
            <template #tab-dfa-conversion>
              <result-area-dfa v-if="adapter.isConverted()" :adapter="adapter" 
              title="Converted to DFA" :automatonType="adapter.AutomatonType.DFA"></result-area-dfa>
              <automaton-table v-if="adapter.isConverted()" :adapter="adapter" 
              title="Relabeled" :automatonType="adapter.AutomatonType.DFAr"></automaton-table>
              <converted-message v-else></converted-message>
            </template>
            <template #tab-dfa-minimization>
              <automaton-table v-if="adapter.isConverted()" :adapter="adapter" 
              title="Removed unreachable states" :automatonType="adapter.AutomatonType.DFAm1"></automaton-table>
              <automaton-table v-if="adapter.isConverted()" :adapter="adapter" 
              title="Equivalent theorem minimization" :automatonType="adapter.AutomatonType.DFAm2"></automaton-table>
              <converted-message v-else></converted-message>
            </template>
          </nav-tab-frame>
        </div>
      </div>
    </div>
  `;

  components = {
    'sub-title': new Subtitle(),
    'nav-tab-frame': new NavTabFrame(),
    'result-area-test': new ResultAreaTest(),
    'automaton-table': new ResultAreaAutomatonTable(),
    'converted-message': new NotConvertedMessage(),
    'result-area-dfa': new ResultAreaDFA()
  };

  props = {
    'adapter': Adapter
  };

  data = () => {
    return {
      title: 'Tests and conversions',
      items: [
        {
          id: 'tab-string-test',
          name: 'Test'
        },
        {
          id: 'tab-original-input',
          name: 'Original'
        },
        {
          id: 'tab-nfa-conversion',
          name: 'To NFA'
        },
        {
          id: 'tab-dfa-conversion',
          name: 'To DFA'
        },
        {
          id: 'tab-dfa-minimization',
          name: 'DFA Minimized'
        }
      ]
    };
  };

}