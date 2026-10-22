import test from 'node:test';
import assert from 'node:assert/strict';
import {recipes,scaleAmount,searchRecipes,filterRecipes,pantryMatch,normalize} from './src/logic.ts';

test('Persian Arabic letter variants normalize consistently',()=>{assert.equal(normalize('كوكو ي'),normalize('کوکو ی'))});
test('serving scaling preserves ratio',()=>{assert.equal(scaleAmount(250,4,2),500);assert.equal(scaleAmount(1.5,3,2),2.25)});
test('search covers aliases and ingredients',()=>{assert.equal(searchRecipes('omelette').length,1);assert.equal(searchRecipes('تخم‌مرغ').length>0,true);assert.equal(searchRecipes('پیتزای فضایی').length,0)});
test('filters apply cuisine/time/vegetarian constraints',()=>{const result=filterRecipes(recipes,{category:'ایرانی',maxMinutes:30,vegetarian:true});assert.ok(result.length>0);assert.ok(result.every(r=>r.cuisine==='ایرانی'&&r.minutes<=30&&r.vegetarian))});
test('pantry matching ranks and explicitly identifies missing essentials',()=>{const result=pantryMatch(recipes,['برنج']);assert.ok(result.length===recipes.length);const rice=result.find(x=>x.recipe.id==='zereshk-polo');assert.equal(rice.matched,1);assert.ok(rice.missingEssential.some(i=>i.name==='مرغ'))});