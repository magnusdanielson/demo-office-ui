//import { ITag } from 'office-ui-fabric-react/lib/Pickers';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
import { people, mru } from './PeoplePickerExampleData';
import { IBasePickerSuggestionsProps, ValidationState } from 'office-ui-fabric-react/lib/Pickers';
import { assign } from 'office-ui-fabric-react/lib/Utilities';
import {IAuReactWrapper} from '@dunite/au-react-wrapper';


export class peoplepickers
{

    state:any;

    public selectedItemsNormal: any[] = [];
    public onChangeNormal(this:IAuReactWrapper, args:any[])
    {
        this.parent.selectedItemsNormal = args[0];
    }

    public selectedItemsCompact: any[] = [];
    public onChangeCompact(this:IAuReactWrapper,args:any[])
    {
        this.parent.selectedItemsCompact = args[0];
    }

    public selectedItemsList: any[] = [];
    public onChangeList(this:IAuReactWrapper,args:any[])
    {
        this.parent.selectedItemsList = args[0];
    }

    public selectedItemsLimited: any[] = [];
    public onChangeLimited(this:IAuReactWrapper, args:any[])
    {
        this.parent.selectedItemsLimited = args[0];
    }
    // OK
    private onItemSelected(args:any[]): IPersonaProps | null
    {
        let item: IPersonaProps = args[0];

        // Put your logic here to return null or modify object

        return item;
    }

    // OK
    suggestionProps: IBasePickerSuggestionsProps = 
    {
        suggestionsHeaderText: 'Suggested People',
        mostRecentlyUsedHeaderText: 'Suggested Contacts',
        noResultsFoundText: 'No results found',
        loadingText: 'Loading',
        showRemoveButtons: true,
        suggestionsAvailableAlertText: 'People Picker Suggestions available',
        suggestionsContainerAriaLabel: 'Suggested contacts'
    };

    limitedSearchSuggestionProps: IBasePickerSuggestionsProps = 
    assign({
        searchForMoreText: 'Load all Results',
        resultsMaximumNumber: 10,
        searchingText: 'Searching...'
      }, this.suggestionProps);
    

    // OK
    inputProps:any = {
        onBlur: (ev: any) => console.log('onBlur called'),
        onFocus: (ev: any) => console.log('onFocus called'),
        'aria-label': 'People Picker'
    };

    constructor() 
    {    
        this.state = {
            delayResults: false,
            peopleList: people,
            mostRecentlyUsed: mru
        };
        this.selectedItemsCompact = people.splice(0, 3)
    }

    // OK
    private _returnMostRecentlyUsed(this:IAuReactWrapper,args:any[]): IPersonaProps[] | Promise<IPersonaProps[]>
    {
        let currentPersonas: IPersonaProps[] = args[0];
        let { mostRecentlyUsed } = this.parent.state;
        mostRecentlyUsed = this.parent._removeDuplicates(mostRecentlyUsed, currentPersonas);
        return this.parent._filterPromise(mostRecentlyUsed);
    }

    private _returnMostRecentlyUsedWithLimit(this:IAuReactWrapper, args:any[]): IPersonaProps[] | Promise<IPersonaProps[]>
    {
        let currentPersonas: IPersonaProps[] = args[0];
        console.log("_returnMostRecentlyUsedWithLimit")
        let { mostRecentlyUsed } = this.parent.state;
        mostRecentlyUsed = this.parent._removeDuplicates(mostRecentlyUsed, currentPersonas);
        mostRecentlyUsed = mostRecentlyUsed.splice(0, 3);
        return this.parent._filterPromise(mostRecentlyUsed);
      };

      // OK
      private _removeDuplicates(personas: IPersonaProps[], possibleDupes: IPersonaProps[]) 
      {
        return personas.filter(persona => !this._listContainsPersona(persona, possibleDupes));
      }

      // OK
      private _filterPromise(personasToReturn: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> 
      {
        if (this.state.delayResults) {
          return this._convertResultsToPromise(personasToReturn);
        } else {
          return personasToReturn;
        }
      }

      // OK
      private _listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) 
      {
        if (!personas || !personas.length || personas.length === 0) {
          return false;
        }
        return personas.filter(item => item.text === persona.text).length > 0;
      }

      // OK
      private _convertResultsToPromise(results: IPersonaProps[]): Promise<IPersonaProps[]> {
        return new Promise<IPersonaProps[]>((resolve, reject) => setTimeout(() => resolve(results), 2000));
      }

      // Never called?
      private _onRemoveSuggestion(item: IPersonaProps): void
      {
        console.log("_onRemoveSuggestion");
        console.log(this);

        const { peopleList, mostRecentlyUsed: mruState } = this.state;
        const indexPeopleList: number = peopleList.indexOf(item);
        const indexMostRecentlyUsed: number = mruState.indexOf(item);
    
        if (indexPeopleList >= 0) {
          const newPeople: IPersonaProps[] = peopleList.slice(0, indexPeopleList).concat(peopleList.slice(indexPeopleList + 1));
          this.state.peopleList = newPeople;
        }
    
        if (indexMostRecentlyUsed >= 0) {
          const newSuggestedPeople: IPersonaProps[] = mruState
            .slice(0, indexMostRecentlyUsed)
            .concat(mruState.slice(indexMostRecentlyUsed + 1));
          this.state.mostRecentlyUsed = newSuggestedPeople;
        }
      };

      // Never called?
      private _validateInput(input: string): ValidationState
      {
          console.log("_validateInput");
        if (input.indexOf('@') !== -1) {
          return ValidationState.valid;
        } else if (input.length > 1) {
          return ValidationState.warning;
        } else {
          return ValidationState.invalid;
        }
      };

      private _onFilterChangedWithLimit(this:IAuReactWrapper, args:any[]) : IPersonaProps[] | Promise<IPersonaProps[]>
      {
        let filterText: string = args[0];
        let currentPersonas: IPersonaProps[] = args[1];
        let limitResults = 3
          
        if (filterText) 
        {
          let filteredPersonas: IPersonaProps[] = this.parent._filterPersonasByText(filterText);
    
          filteredPersonas = this.parent._removeDuplicates(filteredPersonas, currentPersonas);
          filteredPersonas = filteredPersonas.splice(0, limitResults);

          return this.parent._filterPromise(filteredPersonas);
        } 
        else 
        {
          return [];
        }
      };

      // OK
      private _onFilterChanged(this:IAuReactWrapper, args:any[]): IPersonaProps[] | Promise<IPersonaProps[]> 
      {
        let filterText: string = args[0];
        let currentPersonas: IPersonaProps[] = args[1];
        let limitResults: undefined | number;
        if(args.length == 3)
        {
            limitResults = args[2];
        }
          
        if (filterText) 
        {
          let filteredPersonas: IPersonaProps[] = this.parent._filterPersonasByText(filterText);
    
          filteredPersonas = this.parent._removeDuplicates(filteredPersonas, currentPersonas);
          filteredPersonas = limitResults ? filteredPersonas.splice(0, limitResults) : filteredPersonas;
          return this.parent._filterPromise(filteredPersonas);
        } 
        else 
        {
          return [];
        }
      };

      // OK
      private _filterPersonasByText(filterText: string): IPersonaProps[] 
      {
        return this.state.peopleList.filter(item => this._doesTextStartWith(item.text as string, filterText));
      }

      // OK
      private _doesTextStartWith(text: string, filterText: string): boolean {
        return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
      }
    
      // OK
      private _getTextFromItem(persona: IPersonaProps): string {
        return persona.text as string;
      }
}
