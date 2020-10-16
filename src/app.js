// TODO!
import { Censorer, TextFileReader, BannedWordsListFileReader, CensoredTextWriter } from "./Censorer"

const censorer = new Censorer(new TextFileReader(), new BannedWordsListFileReader(), new CensoredTextWriter())

censorer.censor()

